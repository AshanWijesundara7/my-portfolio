"use client"

import {
  FaAws, FaGitAlt, FaGithub, FaFigma, FaWindows,
} from "react-icons/fa"
import {
  SiAndroidstudio, SiIntellijidea, SiPostman, SiClickup, SiJira,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

export function TechStack() {
  const skills = [
    { category: "Languages", items: ["Java", "Python", "JavaScript"] },
    { category: "Frameworks", items: ["React", "Next.js (Beginner)"] },
    { category: "Databases", items: ["MySQL", "MongoDB (Beginner)"] },
    { category: "Tools", items: ["Git/Github", "VS Code", "Figma", "IntelliJ", "Android Studio"] },
  ]

  const tools = [
    { name: "AWS",              icon: <FaAws /> },
    { name: "Git",              icon: <FaGitAlt /> },
    { name: "GitHub",           icon: <FaGithub /> },
    { name: "VS Code",          icon: <VscVscode /> },
    { name: "Android Studio",   icon: <SiAndroidstudio /> },
    { name: "IntelliJ IDEA",    icon: <SiIntellijidea /> },
    { name: "Figma",            icon: <FaFigma /> },
    { name: "Postman",          icon: <SiPostman /> },
    { name: "ClickUp",          icon: <SiClickup /> },
    { name: "Microsoft Office", icon: <FaWindows /> },
    { name: "Jira",             icon: <SiJira /> },
  ]

  // Duplicate tools for seamless loop
  const loopedTools = [...tools, ...tools]

  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-24 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-16 uppercase tracking-tighter border-l-4 border-primary pl-6">
            System <span className="text-primary">Capabilities</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="group relative bg-background border border-border p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-2 h-2 bg-primary/20 group-hover:bg-primary transition-colors" />
                <h3 className="text-primary font-heading uppercase text-xs tracking-widest mb-6 font-semibold">
                  {skill.category}
                </h3>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground group-hover:text-foreground transition-colors font-mono text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-primary/40 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section id="tools" className="py-24 px-6 md:px-24 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-16 uppercase tracking-tighter border-l-4 border-primary pl-6">
            Tools & <span className="text-primary">Technologies</span>
          </h2>
        </div>

        {/* Full-width marquee strip */}
        <div className="relative w-full overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />

          <div
            className="flex gap-12 w-max"
            style={{
              animation: "marquee 28s linear infinite",
            }}
          >
            {loopedTools.map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="group flex flex-col items-center gap-3 cursor-default min-w-[72px]"
              >
                <span
                  className="text-5xl text-white group-hover:-translate-y-1 transition-transform duration-300"
                  style={{ fontSize: "2.75rem" }}
                >
                  {tool.icon}
                </span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors font-mono text-xs text-center leading-tight">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Keyframe injection */}
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </>
  )
}