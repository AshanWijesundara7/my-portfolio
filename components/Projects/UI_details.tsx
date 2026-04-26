"use client"

import { motion, type Variants } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FaFigma, FaPen, FaMobileAlt, FaProjectDiagram } from "react-icons/fa"

const techStack = [
  { name: "Figma", icon: <FaFigma /> },
  { name: "Wireframing", icon: <FaPen /> },
  { name: "Prototyping", icon: <FaMobileAlt /> },
  { name: "User Flows", icon: <FaProjectDiagram /> },
]

const phases = [
  {
    label: "01",
    title: "Research & Discovery",
    description:
      "Conducted user interviews and competitor analysis to identify pain points in existing EV charging apps. Defined personas, journeys, and core jobs-to-be-done.",
  },
  {
    label: "02",
    title: "Wireframing",
    description:
      "Created low-fidelity wireframes for all major screens: onboarding, map view, station details, payment flow, and account management.",
  },
  {
    label: "03",
    title: "Visual Design",
    description:
      "Developed a cohesive design language — colour palette, typography system, icon set, and component library — that conveys trust, speed, and eco-consciousness.",
  },
  {
    label: "04",
    title: "High-Fidelity Prototypes",
    description:
      "Assembled fully interactive Figma prototypes simulating real user flows, including micro-animations and edge-case states for handoff to the development team.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
}

export default function UIDetails() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="space-y-4"
        >
          <span className="text-[10px] uppercase tracking-widest text-primary font-mono border border-primary/30 px-3 py-1">
            04 / UI/UX Design
          </span>
          <h1 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter leading-none">
            ChargeUp <span className="text-primary">UI</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
            A complete mobile application UI/UX design project for the ChargeUp EV platform —
            covering the full design process from initial wireframes and user flows through to
            polished, high-fidelity Figma prototypes ready for developer handoff.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="flex flex-wrap gap-3 mt-8"
        >
          {["Figma", "Wireframing", "Prototyping", "User Flows"].map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest border border-primary/30 px-3 py-1.5 text-primary"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border/40" />
      </div>

      {/* Mockup screens */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight">
            Screen <span className="text-primary">Mockups</span>
          </h2>

          {/* Phone frames row */}
          <div className="flex flex-wrap gap-6 justify-center py-8">
            {[
              { screen: "Map View", color: "from-emerald-950 to-emerald-900", icon: "🗺️" },
              { screen: "Station Detail", color: "from-zinc-900 to-zinc-800", icon: "⚡" },
              { screen: "Payment", color: "from-slate-900 to-slate-800", icon: "💳" },
            ].map((s, i) => (
              <motion.div
                key={s.screen}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex flex-col items-center gap-3"
              >
                {/* Phone frame */}
                <div className="relative border-2 border-border/60 bg-card overflow-hidden" style={{ width: "180px", height: "360px", borderRadius: "24px" }}>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-background rounded-b-xl z-10" />
                  {/* Screen bg */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${s.color} flex flex-col items-center justify-center gap-4 p-4`}>
                    <span className="text-5xl">{s.icon}</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 text-center">{s.screen}</span>
                    {/* Fake UI elements */}
                    <div className="w-full space-y-2">
                      {[90, 70, 85].map((w, j) => (
                        <div key={j} className="h-2 bg-white/10 rounded-full" style={{ width: `${w}%`, margin: "0 auto" }} />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.screen}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40 text-center">
            ↑ Illustrative mockups — actual designs are in Figma
          </p>
        </motion.div>
      </section>

      {/* Design Process */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight">
            Design <span className="text-primary">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.2}
                className="border border-border/40 bg-card p-6 hover:border-primary/40 transition-all group relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-6xl font-heading font-bold text-primary/5 select-none pointer-events-none">
                  {phase.label}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-primary mb-3 block">{phase.label}</span>
                <h3 className="font-heading font-bold uppercase tracking-wide text-base mb-3 group-hover:text-primary transition-colors">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight">
            Tools <span className="text-primary">Used</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.5}
                className="flex flex-col items-center gap-3 border border-border/40 p-6 bg-card hover:border-primary/40 transition-colors group"
              >
                <span className="text-3xl">{tech.icon}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer nav */}
      <div className="max-w-7xl mx-auto px-6 pb-16 flex justify-between items-center">
        <Link
          href="/projects/traffic-data"
          className="flex items-center gap-2 text-[11px] uppercase tracking-widest border border-foreground/30 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1"
        >
          <ArrowLeft size={14} /> Traffic Analysis
        </Link>
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-[11px] uppercase tracking-widest border border-foreground/30 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1"
        >
          All Projects →
        </Link>
      </div>
    </main>
  )
}