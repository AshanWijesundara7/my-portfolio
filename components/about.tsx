"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { label: "Years Experience", value: "N/A" },
  { label: "Projects Completed", value: "5+" },
  { label: "Technologies", value: "5+" },
]

const info = [
  { key: "NAME", value: "Ashan Wijesundara" },
  { key: "ROLE", value: "CS Undergraduate" },
  { key: "FOCUS", value: "Full-Stack Dev" },
  { key: "STATUS", value: "Open to Work" },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-center">
            About <span className="text-primary">Me</span>
          </h2>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* ── LEFT · Photo + info table ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Photo */}
            <div className="relative group">
              {/* Corner accents */}
              <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary z-10 transition-all duration-300 group-hover:w-10 group-hover:h-10" />
              <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary z-10 transition-all duration-300 group-hover:w-10 group-hover:h-10" />

              {/* Offset glow block */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary/10 border border-primary/20" />

              {/* Photo wrapper */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden border border-border/70 group-hover:border-primary/60 transition-colors duration-500">
                <Image
                  src="/me.jpeg"
                  alt="Ashan Wijesundara"
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  priority
                />

                {/* Scanline overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.45) 2px, rgba(0,0,0,0.45) 4px)",
                  }}
                />

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />

                {/* Hover label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-end justify-center pb-5"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80">
                    AMW · 2025
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Info table */}
            <div className="w-full max-w-xs border border-border/40 divide-y divide-border/30">
              {info.map(({ key, value }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-primary/5 transition-colors duration-200"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {key}
                  </span>
                  <span className="font-mono text-[11px] text-primary">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT · Text + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="space-y-10 pt-2"
          >
            {/* Label */}
            <p className="font-mono text-xs text-primary uppercase tracking-widest">
              // who_i_am
            </p>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground font-medium">
                I&apos;m a Computer Science undergraduate, passionate about building
                scalable, elegant solutions to complex problems.
              </p>
              <p>
                With expertise in full-stack development, I craft digital experiences
                that blend performance with precision — from robust backends to
                polished user interfaces.
              </p>
              <p>
                I thrive at the intersection of design and engineering, turning ideas
                into working prototypes that look as good as they run.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border/40" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
                metrics
              </span>
              <div className="h-px flex-1 bg-border/40" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group p-4 bg-card/30 border border-border/50 hover:border-primary/40 transition-all duration-300"
                >
                  {/* Corner accent on hover */}
                  <span className="absolute top-0 right-0 w-0 h-0 border-t-0 border-r-0 border-primary group-hover:w-3 group-hover:h-3 group-hover:border-t-2 group-hover:border-r-2 transition-all duration-300" />

                  <div className="text-2xl font-heading font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}