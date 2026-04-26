// portfolioKnowledge.ts
// ─── Ashan's Portfolio Knowledge Base ────────────────────────────────────────

export const portfolioData = {
  name: "Ashan Wijesundara",
  title: "Computer Science Undergraduate at University of Westminster",
  bio: "I'm a Computer Science undergraduate, passionate about building scalable, elegant solutions to complex problems. With expertise in full-stack development, I craft digital experiences that blend performance with precision.",
  email: "ashanmalidu474@gmail.com",
  github: "https://github.com/AshanWijesundara7",
  linkedin: "https://www.linkedin.com/in/ashan-wijesundara-36b80431a",
  instagram: "https://www.instagram.com/malidu.a",
  website: "https://ashanwijesundara.me",
  resume: "https://ashanwijesundara.me/AshanWijesundara.pdf",
  stats: {
    projects: "5+",
    technologies: "5+",
  },
  skills: {
    languages: ["Java", "Python", "JavaScript"],
    frameworks: ["React", "Next.js"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "IntelliJ", "Android Studio"],
  },
  projects: [
    {
      name: "ChargeUp",
      description:
        "An EV charging station finder app that helps electric vehicle users locate nearby charging stations quickly. Provides real-time station info, navigation support, and station management features.",
      tech: ["React Native", "AWS", "MongoDB", "Google Maps API", "Stripe", "Postman"],
    },
    {
      name: "Estate Agent Website",
      description:
        "A responsive property listing platform with dynamic search filters and a clean modern UI for browsing listings.",
      tech: ["React", "HTML", "CSS3"],
      live: "https://vivere-luxe.vercel.app",
    },
    {
      name: "Traffic Data Analysis System",
      description:
        "A data visualization tool using Python and Tkinter to analyze and display complex traffic patterns from datasets.",
      tech: ["Python", "Tkinter"],
    },
    {
      name: "Mobile App UI/UX Design – ChargeUp",
      description:
        "A complete mobile application UI including wireframes, user flows, and high-fidelity prototypes for the ChargeUp platform.",
      tech: ["Figma"],
    },
  ],
};

// ─── Intent Patterns ──────────────────────────────────────────────────────────
// Each intent has: patterns (keywords to match) + a response generator

export type Intent = {
  patterns: string[];
  response: () => string;
};

export const intents: Intent[] = [
  // Greetings
  {
    patterns: ["hello", "hi", "hey", "greetings", "good morning", "good evening", "howdy", "sup", "what's up"],
    response: () =>
      `Hey there! 👋 I'm Ashan's portfolio assistant. I can tell you about his skills, projects, education, or how to get in touch. What would you like to know?`,
  },

  // Who is Ashan
  {
    patterns: ["who is ashan", "who are you", "about ashan", "tell me about", "introduce", "about yourself", "about him"],
    response: () =>
      `I'm the AI assistant for **${portfolioData.name}**! 🎓\n\nAshan is a ${portfolioData.title}. ${portfolioData.bio}`,
  },

  // Skills - Languages
  {
    patterns: ["language", "programming language", "code", "coding", "java", "python", "javascript"],
    response: () =>
      `Ashan is proficient in the following programming languages:\n\n${portfolioData.skills.languages.map(l => `• ${l}`).join("\n")}\n\nHe uses these to build everything from web apps to data analysis tools!`,
  },

  // Skills - Frameworks
  {
    patterns: ["framework", "react", "next", "nextjs", "next.js", "library", "frontend framework"],
    response: () =>
      `Ashan works with these frameworks:\n\n${portfolioData.skills.frameworks.map(f => `• ${f}`).join("\n")}\n\nHe primarily uses React for frontend development and is leveling up with Next.js!`,
  },

  // Skills - Databases
  {
    patterns: ["database", "db", "mysql", "mongodb", "data storage", "sql", "nosql"],
    response: () =>
      `Ashan has experience with these databases:\n\n${portfolioData.skills.databases.map(d => `• ${d}`).join("\n")}`,
  },

  // Skills - Tools
  {
    patterns: ["tool", "tools", "figma", "git", "github", "vscode", "intellij", "android studio", "software"],
    response: () =>
      `Ashan's toolkit includes:\n\n${portfolioData.skills.tools.map(t => `• ${t}`).join("\n")}`,
  },

  // All Skills
  {
    patterns: ["skill", "skills", "what can", "what does", "expertise", "tech stack", "technologies", "capable"],
    response: () =>
      `Here's Ashan's full tech stack:\n\n🧠 **Languages:** ${portfolioData.skills.languages.join(", ")}\n⚙️ **Frameworks:** ${portfolioData.skills.frameworks.join(", ")}\n🗄️ **Databases:** ${portfolioData.skills.databases.join(", ")}\n🛠️ **Tools:** ${portfolioData.skills.tools.join(", ")}`,
  },

  // Projects - ChargeUp
  {
    patterns: ["chargeup", "charge up", "ev", "electric vehicle", "charging station"],
    response: () => {
      const p = portfolioData.projects[0];
      return `⚡ **${p.name}**\n\n${p.description}\n\n**Tech used:** ${p.tech.join(", ")}`;
    },
  },

  // Projects - Estate Agent
  {
    patterns: ["estate", "property", "real estate", "vivere", "listing", "house"],
    response: () => {
      const p = portfolioData.projects[1];
      return `🏠 **${p.name}**\n\n${p.description}\n\n**Tech used:** ${p.tech.join(", ")}\n🔗 [View Live](${p.live})`;
    },
  },

  // Projects - Traffic
  {
    patterns: ["traffic", "data analysis", "tkinter", "visualization", "dataset"],
    response: () => {
      const p = portfolioData.projects[2];
      return `🚦 **${p.name}**\n\n${p.description}\n\n**Tech used:** ${p.tech.join(", ")}`;
    },
  },

  // Projects - UI/UX
  {
    patterns: ["ui", "ux", "design", "figma", "wireframe", "prototype", "mobile design"],
    response: () => {
      const p = portfolioData.projects[3];
      return `🎨 **${p.name}**\n\n${p.description}\n\n**Tech used:** ${p.tech.join(", ")}`;
    },
  },

  // All Projects
  {
    patterns: ["project", "projects", "work", "portfolio", "built", "created", "developed", "made"],
    response: () =>
      `Here are Ashan's featured projects:\n\n${portfolioData.projects
        .map((p, i) => `${i + 1}. **${p.name}** — ${p.tech.join(", ")}`)
        .join("\n")}\n\nAsk me about any specific project for more details! 😊`,
  },

  // Education
  {
    patterns: ["education", "university", "study", "degree", "westminster", "student", "undergraduate", "college", "academic"],
    response: () =>
      `🎓 Ashan is currently a **Computer Science undergraduate** at the **University of Westminster**. He's passionate about applying what he learns to real-world projects!`,
  },

  // Contact
  {
    patterns: ["contact", "reach", "email", "hire", "connect", "get in touch", "message", "work together", "collaborate"],
    response: () =>
      `You can reach Ashan through:\n\n📧 **Email:** ${portfolioData.email}\n💼 **LinkedIn:** [View Profile](${portfolioData.linkedin})\n🐙 **GitHub:** [View Code](${portfolioData.github})\n📸 **Instagram:** [Follow](${portfolioData.instagram})\n\nHe's always open to new projects, ideas, and opportunities!`,
  },

  // Resume / CV
  {
    patterns: ["resume", "cv", "curriculum", "download", "pdf"],
    response: () =>
      `📄 You can download Ashan's resume here:\n👉 [Download CV](${portfolioData.resume})`,
  },

  // GitHub
  {
    patterns: ["github", "repo", "repository", "source code", "open source"],
    response: () =>
      `🐙 Check out Ashan's GitHub for his source code and contributions:\n👉 [${portfolioData.github}](${portfolioData.github})`,
  },

  // LinkedIn
  {
    patterns: ["linkedin", "professional", "network"],
    response: () =>
      `💼 Connect with Ashan on LinkedIn:\n👉 [View Profile](${portfolioData.linkedin})`,
  },

  // Experience
  {
    patterns: ["experience", "years", "how long", "worked"],
    response: () =>
      `Ashan has completed **${portfolioData.stats.projects} projects** using **${portfolioData.stats.technologies}+ technologies**. He's a CS undergraduate constantly building and learning!`,
  },

  // Farewell
  {
    patterns: ["bye", "goodbye", "see you", "later", "thanks", "thank you", "cheers"],
    response: () =>
      `Thanks for stopping by! 😊 Feel free to come back anytime. You can also reach Ashan directly at ${portfolioData.email}. Have a great day!`,
  },
];
