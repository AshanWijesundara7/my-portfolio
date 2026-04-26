// chatEngine.ts
// ─── Local ML Chat Engine (TF-IDF + Cosine Similarity) ───────────────────────
// No API, no server, runs 100% in the browser / Next.js runtime

import { intents, Intent } from "./portfolioKnowledge";

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
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));
}

// ── 2. TF-IDF Vectoriser ──────────────────────────────────────────────────────

type TermFreq = Record<string, number>;

function termFreq(tokens: string[]): TermFreq {
  const tf: TermFreq = {};
  for (const t of tokens) tf[t] = (tf[t] || 0) + 1;
  const total = tokens.length || 1;
  for (const t in tf) tf[t] /= total;
  return tf;
}

// Pre-build corpus: one "document" per intent (all patterns joined)
type IntentVector = { intent: Intent; tokens: string[]; tf: TermFreq };

const corpus: IntentVector[] = intents.map((intent) => {
  const tokens = tokenize(intent.patterns.join(" "));
  return { intent, tokens, tf: termFreq(tokens) };
});

// IDF across corpus
const idf: Record<string, number> = (() => {
  const N = corpus.length;
  const df: Record<string, number> = {};
  for (const doc of corpus) {
    const seen = new Set(doc.tokens);
    for (const t of seen) df[t] = (df[t] || 0) + 1;
  }
  const result: Record<string, number> = {};
  for (const t in df) result[t] = Math.log((N + 1) / (df[t] + 1)) + 1;
  return result;
})();

function tfidfVector(tf: TermFreq): Record<string, number> {
  const vec: Record<string, number> = {};
  for (const t in tf) vec[t] = tf[t] * (idf[t] || 1);
  return vec;
}

// ── 3. Cosine Similarity ──────────────────────────────────────────────────────

function cosineSim(a: Record<string, number>, b: Record<string, number>): number {
  let dot = 0, normA = 0, normB = 0;
  for (const k in a) {
    dot += (a[k] || 0) * (b[k] || 0);
    normA += a[k] ** 2;
  }
  for (const k in b) normB += b[k] ** 2;
  if (!normA || !normB) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

// ── 4. Direct Keyword Boost ───────────────────────────────────────────────────
// Ensures exact keyword matches always rank higher than fuzzy matches

function keywordMatchScore(queryTokens: string[], intentPatterns: string[]): number {
  const patternTokens = tokenize(intentPatterns.join(" "));
  let matches = 0;
  for (const qt of queryTokens) {
    if (patternTokens.includes(qt)) matches++;
  }
  return matches / Math.max(queryTokens.length, 1);
}

// ── 5. Main Prediction Function ───────────────────────────────────────────────

const CONFIDENCE_THRESHOLD = 0.08; // minimum score to give a real answer

export function predict(userInput: string): string {
  const tokens = tokenize(userInput);
  if (tokens.length === 0) {
    return "I didn't quite catch that! Could you rephrase? 😊 Try asking about Ashan's skills, projects, or contact info.";
  }

  const queryTF = termFreq(tokens);
  const queryVec = tfidfVector(queryTF);

  let bestScore = -1;
  let bestIntent: Intent | null = null;

  for (const doc of corpus) {
    const docVec = tfidfVector(doc.tf);
    const tfidfScore = cosineSim(queryVec, docVec);
    const keywordScore = keywordMatchScore(tokens, doc.intent.patterns);

    // Weighted combination: 60% TF-IDF + 40% keyword match
    const finalScore = tfidfScore * 0.6 + keywordScore * 0.4;

    if (finalScore > bestScore) {
      bestScore = finalScore;
      bestIntent = doc.intent;
    }
  }

  if (!bestIntent || bestScore < CONFIDENCE_THRESHOLD) {
    return fallbackResponse(userInput);
  }

  return bestIntent.response();
}

// ── 6. Fallback Response ──────────────────────────────────────────────────────

function fallbackResponse(input: string): string {
  const suggestions = [
    "his skills and tech stack",
    "his projects like ChargeUp or the Estate Agent Website",
    "how to contact him",
    "his education and background",
    "downloading his resume",
  ];
  const random = suggestions[Math.floor(Math.random() * suggestions.length)];
  return `Hmm, I'm not sure about that! 🤔 Try asking me about ${random}. I know everything about Ashan's portfolio!`;
}
