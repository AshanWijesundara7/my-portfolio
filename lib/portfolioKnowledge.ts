// lib/portfolioKnowledge.ts
// ✅ Imports from lib/projectsData.ts (no "use client") — safe for API routes

import { projects } from "@/lib/projectsData"

export const portfolioData = {
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
  projects, // ✅ auto-synced from lib/projectsData.ts
}

export type Intent = {
  patterns: string[]
  response: () => string
}

export const intents: Intent[] = [
  {
    patterns: ["hello", "hi", "hey", "greetings", "good morning", "good evening", "howdy", "sup", "what's up"],
    response: () =>
      `Hey there! 👋 I'm Ashan's portfolio assistant. Ask me about his skills, projects, or how to get in touch!`,
  },
  {
    patterns: ["who is ashan", "who are you", "about ashan", "tell me about", "introduce", "about yourself", "about him"],
    response: () =>
      `I'm the AI assistant for **${portfolioData.name}**! 🎓\n\nAshan is a ${portfolioData.title}.\n\n${portfolioData.bio}`,
  },
  {
    patterns: ["project", "projects", "work", "portfolio", "built", "created", "developed", "made", "what have you", "show me"],
    response: () =>
      `Here are Ashan's featured projects:\n\n${portfolioData.projects
        .map((p, i) => `${i + 1}. **${p.title}** — ${p.tags.join(", ")}`)
        .join("\n")}\n\nAsk me about any specific project for more details! 😊`,
  },
  {
    patterns: ["skill", "skills", "what can", "expertise", "tech stack", "technologies", "capable", "know"],
    response: () =>
      `Here's Ashan's full tech stack:\n\n🧠 **Languages:** ${portfolioData.skills.languages.join(", ")}\n⚙️ **Frameworks:** ${portfolioData.skills.frameworks.join(", ")}\n🗄️ **Databases:** ${portfolioData.skills.databases.join(", ")}\n🛠️ **Tools:** ${portfolioData.skills.tools.join(", ")}`,
  },
  {
    patterns: ["language", "programming", "java", "python", "javascript", "coding", "code"],
    response: () =>
      `Ashan is proficient in:\n\n${portfolioData.skills.languages.map(l => `• ${l}`).join("\n")}`,
  },
  {
    patterns: ["framework", "react", "next", "nextjs", "next.js", "react native", "frontend"],
    response: () =>
      `Ashan works with these frameworks:\n\n${portfolioData.skills.frameworks.map(f => `• ${f}`).join("\n")}`,
  },
  {
    patterns: ["database", "db", "mysql", "mongodb", "data", "sql", "nosql"],
    response: () =>
      `Ashan has experience with:\n\n${portfolioData.skills.databases.map(d => `• ${d}`).join("\n")}`,
  },
  {
    patterns: ["tool", "tools", "figma", "git", "github", "vscode", "intellij", "android studio"],
    response: () =>
      `Ashan's toolkit includes:\n\n${portfolioData.skills.tools.map(t => `• ${t}`).join("\n")}`,
  },
  {
    patterns: ["education", "university", "study", "degree", "westminster", "student", "undergraduate", "college"],
    response: () =>
      `🎓 Ashan is a **Computer Science undergraduate** at the **University of Westminster**.`,
  },
  {
    patterns: ["contact", "reach", "email", "hire", "connect", "get in touch", "message", "collaborate"],
    response: () =>
      `You can reach Ashan through:\n\n📧 **Email:** ${portfolioData.email}\n💼 **LinkedIn:** [View Profile](${portfolioData.linkedin})\n🐙 **GitHub:** [View Code](${portfolioData.github})\n📸 **Instagram:** [Follow](${portfolioData.instagram})`,
  },
  {
    patterns: ["resume", "cv", "curriculum", "download", "pdf"],
    response: () =>
      `📄 Download Ashan's latest resume here:\n👉 [Download CV](${portfolioData.resume})`,
  },
  {
    patterns: ["github", "repo", "repository", "source code", "open source"],
    response: () =>
      `🐙 Check out Ashan's GitHub:\n👉 [${portfolioData.github}](${portfolioData.github})`,
  },
  {
    patterns: ["linkedin", "professional", "network"],
    response: () =>
      `💼 Connect with Ashan on LinkedIn:\n👉 [View Profile](${portfolioData.linkedin})`,
  },
  {
    patterns: ["bye", "goodbye", "see you", "later", "thanks", "thank you", "cheers"],
    response: () =>
      `Thanks for stopping by! 😊 Feel free to reach Ashan at ${portfolioData.email}. Have a great day!`,
  },
]