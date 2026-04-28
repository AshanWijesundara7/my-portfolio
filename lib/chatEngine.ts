// lib/chatEngine.ts
// ─── Local ML Chat Engine (TF-IDF + Cosine Similarity) ───────────────────────
// Projects are auto-synced from components/projects.tsx ✅

import { intents, Intent, portfolioData } from "./portfolioKnowledge"

// ── 1. Text Preprocessing ─────────────────────────────────────────────────────

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "it", "in", "on", "at", "to", "for", "of",
  "and", "or", "but", "i", "you", "he", "she", "they", "we", "do",
  "does", "did", "can", "could", "would", "should", "will", "me",
  "my", "his", "her", "your", "their", "this", "that", "with", "about",
  "what", "how", "who", "when", "where", "which", "are", "was", "were",
  "be", "been", "has", "have", "had", "not", "no", "so", "if", "just",
  "get", "got", "let", "like", "know", "think", "want", "need", "tell",
  "give", "show", "make", "see",
])

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w))
}

// ── 2. Dynamic Project Finder ─────────────────────────────────────────────────
// Checks if the user is asking about a specific project by matching
// title words, slug, or tags — auto-works for any new project added ✅

function findProject(tokens: string[]) {
  const query = tokens.join(" ")

  return portfolioData.projects.find((project) => {
    const titleWords = project.title.toLowerCase().split(/\s+/)
    const slugWords = project.slug.toLowerCase().split("-")
    const tagWords = project.tags.map((t) => t.toLowerCase())
    const allWords = [...titleWords, ...slugWords, ...tagWords]

    // Match if any token matches a project word
    return tokens.some((token) =>
      allWords.some((word) => word.includes(token) || token.includes(word))
    )
  })
}

function projectResponse(project: typeof portfolioData.projects[0]): string {
  const lines: string[] = []
  lines.push(`**${project.title}**\n`)
  lines.push(project.description)
  lines.push(`\n🛠️ **Tech:** ${project.tags.join(", ")}`)
  if (project.link) lines.push(`🔗 [Live Site](${project.link})`)
  if (project.github) lines.push(`🐙 [Source Code](${project.github})`)
  if (!project.link && !project.github) lines.push(`_(No live link available)_`)
  return lines.join("\n")
}

// ── 3. TF-IDF Vectoriser ──────────────────────────────────────────────────────

type TermFreq = Record<string, number>

function termFreq(tokens: string[]): TermFreq {
  const tf: TermFreq = {}
  for (const t of tokens) tf[t] = (tf[t] || 0) + 1
  const total = tokens.length || 1
  for (const t in tf) tf[t] /= total
  return tf
}

// Filter out the dynamic project intent (empty response) for TF-IDF
const staticIntents = intents.filter((i) => i.response() !== "")

type IntentVector = { intent: Intent; tokens: string[]; tf: TermFreq }

const corpus: IntentVector[] = staticIntents.map((intent) => {
  const tokens = tokenize(intent.patterns.join(" "))
  return { intent, tokens, tf: termFreq(tokens) }
})

// IDF
const idf: Record<string, number> = (() => {
  const N = corpus.length
  const df: Record<string, number> = {}
  for (const doc of corpus) {
    const seen = new Set(doc.tokens)
    for (const t of seen) df[t] = (df[t] || 0) + 1
  }
  const result: Record<string, number> = {}
  for (const t in df) result[t] = Math.log((N + 1) / (df[t] + 1)) + 1
  return result
})()

function tfidfVector(tf: TermFreq): Record<string, number> {
  const vec: Record<string, number> = {}
  for (const t in tf) vec[t] = tf[t] * (idf[t] || 1)
  return vec
}

// ── 4. Cosine Similarity ──────────────────────────────────────────────────────

function cosineSim(a: Record<string, number>, b: Record<string, number>): number {
  let dot = 0, normA = 0, normB = 0
  for (const k in a) {
    dot += (a[k] || 0) * (b[k] || 0)
    normA += a[k] ** 2
  }
  for (const k in b) normB += b[k] ** 2
  if (!normA || !normB) return 0
  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
}

// ── 5. Keyword Boost ──────────────────────────────────────────────────────────

function keywordMatchScore(queryTokens: string[], intentPatterns: string[]): number {
  const patternTokens = tokenize(intentPatterns.join(" "))
  let matches = 0
  for (const qt of queryTokens) {
    if (patternTokens.includes(qt)) matches++
  }
  return matches / Math.max(queryTokens.length, 1)
}

// ── 6. Main Predict Function ──────────────────────────────────────────────────

const CONFIDENCE_THRESHOLD = 0.08

export function predict(userInput: string): string {
  const tokens = tokenize(userInput)

  if (tokens.length === 0) {
    return "I didn't quite catch that! Try asking about Ashan's skills, projects, or contact info. 😊"
  }

  // ✅ Step 1: Check if user is asking about a specific project (dynamic lookup)
  const matchedProject = findProject(tokens)
  if (matchedProject) {
    return projectResponse(matchedProject)
  }

  // Step 2: TF-IDF + cosine similarity for all other intents
  const queryTF = termFreq(tokens)
  const queryVec = tfidfVector(queryTF)

  let bestScore = -1
  let bestIntent: Intent | null = null

  for (const doc of corpus) {
    const docVec = tfidfVector(doc.tf)
    const tfidfScore = cosineSim(queryVec, docVec)
    const keywordScore = keywordMatchScore(tokens, doc.intent.patterns)
    const finalScore = tfidfScore * 0.6 + keywordScore * 0.4

    if (finalScore > bestScore) {
      bestScore = finalScore
      bestIntent = doc.intent
    }
  }

  if (!bestIntent || bestScore < CONFIDENCE_THRESHOLD) {
    return fallbackResponse()
  }

  return bestIntent.response()
}

// ── 7. Fallback ───────────────────────────────────────────────────────────────

function fallbackResponse(): string {
  const projectTitles = portfolioData.projects.map(p => `**${p.title}**`).join(", ")
  return `Hmm, I'm not sure about that! 🤔\n\nI can tell you about:\n• Ashan's projects: ${projectTitles}\n• His skills and tech stack\n• How to contact him\n• Downloading his resume`
}