export function TechStack() {
  const skills = [
    { category: "Languages", items: ["Java", "Python", "JavaScript"] },
    { category: "Frameworks", items: ["React", "Next.js(Begginer)"]},
    { category: "Databases", items: ["MySQL", "MongoDB(Begginer)"] },
    { category: "Tools", items: ["Git/Github", "VS Code", "Figma", "Intellij","Android Studio"] },
  ]

  return (
    <section id="skills" className="py-24 px-6 md:px-24 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold mb-16 uppercase tracking-tighter border-l-4 border-primary pl-6">
          System <span className="text-primary">Capabilities</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="group relative bg-background border border-border p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]"
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
  )
}
