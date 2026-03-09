"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I'm a Computer Science undergraduate, passionate about building scalable, elegant solutions to complex problems. With expertise in full-stack development, I craft digital experiences that blend performance with precision.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: "Years Experience", value: "0" },
              { label: "Projects Completed", value: "5+" },
              { label: "Technologies", value: "5+" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="p-6 bg-card/30 border border-border/50"
              >
                <div className="text-2xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
