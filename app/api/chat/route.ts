
import { NextRequest, NextResponse } from "next/server";

// ══════════════════════════════════════════════════════════════════════════════
// 1. PORTFOLIO DATA  — edit this section to update your info
// ══════════════════════════════════════════════════════════════════════════════

const portfolioData = {
  name: "Ashan Wijesundara",
  title: "Computer Science Undergraduate at University of Westminster",
  bio: "I'm a Computer Science undergraduate, passionate about building scalable, elegant solutions to complex problems. With expertise in full-stack development, I craft digital experiences that blend performance with precision.",
  email: "ashanmalidu474@gmail.com",
  github: "https://github.com/AshanWijesundara7",
  linkedin: "https://www.linkedin.com/in/ashan-wijesundara-36b80431a",
  instagram: "https://www.instagram.com/malidu.a",
  website: "https://ashanwijesundara.me",
  resume: "/AshanWijesundara.pdf",
  skills: {
    languages: ["Java", "Python", "JavaScript"],
    frameworks: ["React", "Next.js", "React Native"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "IntelliJ", "Android Studio"],
  },
  projects: [
    {
      title: "ChargeUp Group Project",
      slug: "chargeup",
      description:
        "An EV charging station finder app helping electric vehicle users locate nearby charging stations quickly. Provides real-time station info, navigation support, and station management features.",
      tags: ["React Native", "AWS", "MongoDB", "Google Maps API", "Stripe", "Postman"],
      link: "https://chargeupsl.vercel.app/",
      github: "https://github.com/AshanWijesundara7/ChargeUp2",
    },
    {
      title: "Smart Campus API",
      slug: "smart-campus-api",
      description:
        "A RESTful API built with JAX-RS (Jersey) for managing campus rooms and IoT sensors. Features full CRUD, sensor readings history, sub-resource locators, query filtering, and HATEOAS discovery — backed by thread-safe in-memory data stores.",
      tags: ["Java", "JAX-RS", "Jersey", "Maven", "REST API"],
      link: "",
      github: "https://github.com/AshanWijesundara7",
    },
    {
      title: "Estate Agent Website",
      slug: "estate-agent",
      description:
        "A responsive property listing platform featuring dynamic search filters and a clean, modern UI for browsing listings.",
      tags: ["React", "HTML", "CSS3"],
      link: "https://vivere-luxe.vercel.app",
      github: "https://github.com/AshanWijesundara7/estate-agent-website",
    },
    {
      title: "Traffic Data Analysis System",
      slug: "traffic-data",
      description:
        "A data visualization tool using Python and Tkinter to analyze and display complex traffic patterns from datasets.",
      tags: ["Python", "Tkinter"],
      link: "",
      github: "https://github.com/AshanWijesundara7/Traffic-Data-Analysis-System",
    },
    {
      title: "Mobile App UI/UX Design – ChargeUp",
      slug: "chargeup-ui",
      description:
        "Designed a complete mobile application UI including wireframes, user flows, and high-fidelity prototypes for the ChargeUp platform.",
      tags: ["Figma"],
      link: "",
      github: "",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// 2. INTENT PATTERNS  — add/edit patterns to tune the chatbot's understanding
// ══════════════════════════════════════════════════════════════════════════════

type Intent = {
  tag: string;
  patterns: string[];
  response: () => string;
};

const intents: Intent[] = [
  {
    tag: "greeting",
    patterns: [
      "hello", "hi", "hey", "greetings", "good morning", "good evening",
      "howdy", "sup", "whats up", "yo", "hiya",
    ],
    response: () =>
      `Hey there! 👋 I'm Ashan's portfolio assistant.\n\nI can tell you about his **projects**, **skills**, **education**, or how to **get in touch**. What would you like to know?`,
  },
  {
    tag: "about",
    patterns: [
      "who is ashan", "who are you", "about ashan", "tell me about",
      "introduce", "about yourself", "about him", "describe ashan",
      "background", "overview",
    ],
    response: () =>
      `**${portfolioData.name}** 🎓\n\n${portfolioData.title}\n\n${portfolioData.bio}`,
  },
  {
    tag: "projects_list",
    patterns: [
      "project", "projects", "portfolio", "work", "built", "created",
      "developed", "made", "what have you built", "show me projects",
      "list projects", "your work",
    ],
    response: () =>
      `Here are Ashan's featured projects:\n\n${portfolioData.projects
        .map((p, i) => `${i + 1}. **${p.title}** — ${p.tags.join(", ")}`)
        .join("\n")}\n\nAsk me about any specific project for more details! 😊`,
  },
  {
    tag: "skills_all",
    patterns: [
      "skill", "skills", "tech stack", "technologies", "expertise",
      "capable", "what do you know", "what can you do", "abilities",
      "competencies", "full stack",
    ],
    response: () =>
      `Here's Ashan's full tech stack:\n\n🧠 **Languages:** ${portfolioData.skills.languages.join(", ")}\n⚙️ **Frameworks:** ${portfolioData.skills.frameworks.join(", ")}\n🗄️ **Databases:** ${portfolioData.skills.databases.join(", ")}\n🛠️ **Tools:** ${portfolioData.skills.tools.join(", ")}`,
  },
  {
    tag: "languages",
    patterns: [
      "language", "programming language", "java", "python", "javascript",
      "coding language", "what language",
    ],
    response: () =>
      `Ashan is proficient in these programming languages:\n\n${portfolioData.skills.languages.map((l) => `• **${l}**`).join("\n")}`,
  },
  {
    tag: "frameworks",
    patterns: [
      "framework", "react", "next", "nextjs", "next.js", "react native",
      "frontend framework", "library",
    ],
    response: () =>
      `Ashan works with these frameworks & libraries:\n\n${portfolioData.skills.frameworks.map((f) => `• **${f}**`).join("\n")}`,
  },
  {
    tag: "databases",
    patterns: [
      "database", "db", "mysql", "mongodb", "data storage", "sql",
      "nosql", "mongo",
    ],
    response: () =>
      `Ashan has experience with these databases:\n\n${portfolioData.skills.databases.map((d) => `• **${d}**`).join("\n")}`,
  },
  {
    tag: "tools",
    patterns: [
      "tool", "tools", "figma", "git", "github", "vscode", "vs code",
      "intellij", "android studio", "software", "ide",
    ],
    response: () =>
      `Ashan's development toolkit:\n\n${portfolioData.skills.tools.map((t) => `• **${t}**`).join("\n")}`,
  },
  {
    tag: "education",
    patterns: [
      "education", "university", "study", "degree", "westminster",
      "student", "undergraduate", "college", "course", "where did",
      "qualification",
    ],
    response: () =>
      `🎓 Ashan is a **Computer Science undergraduate** at the **University of Westminster**.`,
  },
  {
    tag: "contact",
    patterns: [
      "contact", "reach", "email", "hire", "connect", "get in touch",
      "message", "collaborate", "work together", "available", "freelance",
    ],
    response: () =>
      `You can reach Ashan through:\n\n📧 **Email:** ${portfolioData.email}\n💼 **LinkedIn:** [View Profile](${portfolioData.linkedin})\n🐙 **GitHub:** [View Code](${portfolioData.github})\n📸 **Instagram:** [Follow](${portfolioData.instagram})`,
  },
  {
    tag: "resume",
    patterns: [
      "resume", "cv", "curriculum vitae", "download cv", "download resume",
      "pdf", "get resume",
    ],
    response: () =>
      `📄 Download Ashan's latest resume here:\n👉 [Download CV](${portfolioData.resume})`,
  },
  {
    tag: "github",
    patterns: [
      "github", "repo", "repository", "source code", "open source",
      "git profile", "code",
    ],
    response: () =>
      `🐙 Check out Ashan's GitHub:\n👉 [${portfolioData.github}](${portfolioData.github})`,
  },
  {
    tag: "linkedin",
    patterns: [
      "linkedin", "professional profile", "network", "professional network",
    ],
    response: () =>
      `💼 Connect with Ashan on LinkedIn:\n👉 [View Profile](${portfolioData.linkedin})`,
  },
  {
    tag: "website",
    patterns: [
      "website", "web site", "portfolio site", "personal site", "url",
      "link", "visit",
    ],
    response: () =>
      `🌐 Visit Ashan's portfolio website:\n👉 [${portfolioData.website}](${portfolioData.website})`,
  },
  {
    tag: "goodbye",
    patterns: [
      "bye", "goodbye", "see you", "later", "thanks", "thank you",
      "cheers", "that's all", "done", "exit",
    ],
    response: () =>
      `Thanks for stopping by! 😊 Feel free to reach Ashan at **${portfolioData.email}**. Have a great day!`,
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// 3. TEXT PREPROCESSING
// ══════════════════════════════════════════════════════════════════════════════

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "it", "in", "on", "at", "to", "for", "of", "and", "or", "but",
  "i", "you", "he", "she", "they", "we", "do", "does", "did", "can", "could", "would",
  "should", "will", "me", "my", "his", "her", "your", "their", "this", "that", "with",
  "about", "what", "how", "who", "when", "where", "which", "are", "was", "were", "be",
  "been", "has", "have", "had", "not", "no", "so", "if", "just", "get", "got", "let",
  "like", "know", "think", "want", "need", "tell", "give", "show", "make", "see", "its",
  "am", "im", "please", "hey", "hi",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));
}

// ══════════════════════════════════════════════════════════════════════════════
// 4. TF-IDF ENGINE
// ══════════════════════════════════════════════════════════════════════════════

type TermFreq = Record<string, number>;

function termFreq(tokens: string[]): TermFreq {
  const tf: TermFreq = {};
  for (const t of tokens) tf[t] = (tf[t] || 0) + 1;
  const total = tokens.length || 1;
  for (const t in tf) tf[t] /= total;
  return tf;
}

// Build corpus from intent patterns (exclude project-specific dynamic intents)
const corpus = intents.map((intent) => {
  const tokens = tokenize(intent.patterns.join(" "));
  return { intent, tokens, tf: termFreq(tokens) };
});

// Inverse Document Frequency
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

// ══════════════════════════════════════════════════════════════════════════════
// 5. COSINE SIMILARITY
// ══════════════════════════════════════════════════════════════════════════════

function cosineSim(
  a: Record<string, number>,
  b: Record<string, number>
): number {
  let dot = 0, normA = 0, normB = 0;
  for (const k in a) {
    dot += (a[k] || 0) * (b[k] || 0);
    normA += a[k] ** 2;
  }
  for (const k in b) normB += b[k] ** 2;
  if (!normA || !normB) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

// ══════════════════════════════════════════════════════════════════════════════
// 6. KEYWORD BOOST  — increases score when query tokens directly match patterns
// ══════════════════════════════════════════════════════════════════════════════

function keywordBoost(queryTokens: string[], intentPatterns: string[]): number {
  const patternTokens = tokenize(intentPatterns.join(" "));
  let matches = 0;
  for (const qt of queryTokens) {
    if (patternTokens.some((pt) => pt === qt || pt.includes(qt) || qt.includes(pt)))
      matches++;
  }
  return matches / Math.max(queryTokens.length, 1);
}

// ══════════════════════════════════════════════════════════════════════════════
// 7. DYNAMIC PROJECT LOOKUP
//    Automatically matches any project by title, slug, tag, or tech keyword
// ══════════════════════════════════════════════════════════════════════════════

function findProject(tokens: string[]) {
  return portfolioData.projects.find((project) => {
    const titleWords = tokenize(project.title);
    const slugWords = project.slug.toLowerCase().split("-");
    const tagWords = project.tags.map((t) => t.toLowerCase().replace(/[^a-z0-9]/g, ""));
    const allWords = [...titleWords, ...slugWords, ...tagWords];

    return tokens.some((token) =>
      allWords.some(
        (word) => word === token || word.includes(token) || token.includes(word)
      )
    );
  });
}

function buildProjectResponse(
  project: (typeof portfolioData.projects)[0]
): string {
  const lines: string[] = [];
  lines.push(`**${project.title}**\n`);
  lines.push(project.description);
  lines.push(`\n🛠️ **Tech:** ${project.tags.join(", ")}`);
  if (project.link) lines.push(`🔗 [Live Site](${project.link})`);
  if (project.github) lines.push(`🐙 [GitHub](${project.github})`);
  if (!project.link && !project.github) lines.push(`_(No live link available)_`);
  return lines.join("\n");
}

// ══════════════════════════════════════════════════════════════════════════════
// 8. FALLBACK RESPONSE
// ══════════════════════════════════════════════════════════════════════════════

function fallback(): string {
  const projectList = portfolioData.projects.map((p) => `**${p.title}**`).join(", ");
  return (
    `Hmm, I'm not sure about that! 🤔\n\n` +
    `I can tell you about:\n` +
    `• 🚀 **Projects:** ${projectList}\n` +
    `• 🧠 **Skills & Tech Stack**\n` +
    `• 🎓 **Education**\n` +
    `• 📬 **Contact & Social Links**\n` +
    `• 📄 **Resume Download**`
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 9. MAIN PREDICT FUNCTION
// ══════════════════════════════════════════════════════════════════════════════

const CONFIDENCE_THRESHOLD = 0.07;

function predict(userInput: string): string {
  const tokens = tokenize(userInput);

  if (tokens.length === 0) {
    return "I didn't quite catch that! Try asking about Ashan's skills, projects, or contact info. 😊";
  }

  // ── Step 1: Check for specific project mention first ──
  const matchedProject = findProject(tokens);
  if (matchedProject) {
    return buildProjectResponse(matchedProject);
  }

  // ── Step 2: TF-IDF + Cosine Similarity against all intents ──
  const queryTF = termFreq(tokens);
  const queryVec = tfidfVector(queryTF);

  let bestScore = -1;
  let bestIntent: Intent | null = null;

  for (const doc of corpus) {
    const docVec = tfidfVector(doc.tf);
    const tfidf = cosineSim(queryVec, docVec);
    const keyword = keywordBoost(tokens, doc.intent.patterns);
    // Weighted combination: TF-IDF cosine (60%) + keyword overlap (40%)
    const score = tfidf * 0.6 + keyword * 0.4;

    if (score > bestScore) {
      bestScore = score;
      bestIntent = doc.intent;
    }
  }

  if (!bestIntent || bestScore < CONFIDENCE_THRESHOLD) {
    return fallback();
  }

  return bestIntent.response();
}

// ══════════════════════════════════════════════════════════════════════════════
// 10. NEXT.JS API ROUTE HANDLER
// ══════════════════════════════════════════════════════════════════════════════

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: { role: string; content: string }[] = body.messages;

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { message: "No messages provided." },
        { status: 400 }
      );
    }

    const lastUserMessage =
      messages.filter((m) => m.role === "user").at(-1)?.content ?? "";

    const reply = predict(lastUserMessage);

    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again!" },
      { status: 500 }
    );
  }
}