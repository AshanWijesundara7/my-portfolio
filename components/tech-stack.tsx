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
    { name: "AWS",              icon: <FaAws           size={32} color="#FF9900" /> },
    { name: "Git",              icon: <FaGitAlt        size={32} color="#F05032" /> },
    { name: "GitHub",           icon: <FaGithub        size={32} color="#ffffff" /> },
    { name: "VS Code",          icon: <VscVscode       size={32} color="#007ACC" /> },
    { name: "Android Studio",   icon: <SiAndroidstudio size={32} color="#3DDC84" /> },
    { name: "IntelliJ IDEA",    icon: <SiIntellijidea  size={32} color="#FE315D" /> },
    { name: "Figma",            icon: <FaFigma         size={32} color="#F24E1E" /> },
    { name: "Postman",          icon: <SiPostman       size={32} color="#FF6C37" /> },
    { name: "ClickUp",          icon: <SiClickup       size={32} color="#7B68EE" /> },
    { name: "Microsoft Office", icon: <FaWindows       size={32} color="#D83B01" /> },
    { name: "Jira",             icon: <SiJira          size={32} color="#0052CC" /> },
  ]

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
      <section id="tools" className="py-24 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-16 uppercase tracking-tighter border-l-4 border-primary pl-6">
            Tools & <span className="text-primary">Technologies</span>
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center gap-3 cursor-default"
              >
                <div className="relative flex items-center justify-center w-16 h-16 bg-background border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary/20 group-hover:bg-primary transition-colors" />
                  {tool.icon}
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors font-mono text-xs text-center leading-tight">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}