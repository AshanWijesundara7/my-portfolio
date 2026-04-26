"use client"

import { motion, type Variants } from "framer-motion"
import { Github, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { FaPython, FaTable, FaChartBar } from "react-icons/fa"

const techStack = [
  { name: "Python", icon: <FaPython /> },
  { name: "Tkinter", icon: <FaPython /> },
  { name: "CSV / Data", icon: <FaTable /> },
  { name: "Matplotlib", icon: <FaChartBar /> },
]

const features = [
  {
    title: "Data Ingestion",
    description:
      "Parses large CSV traffic datasets with Python's built-in csv module, cleaning and normalising rows for downstream analysis.",
  },
  {
    title: "Interactive GUI",
    description:
      "Tkinter-based desktop interface lets users select date ranges, sensor IDs, and chart types without touching the terminal.",
  },
  {
    title: "Pattern Visualisation",
    description:
      "Renders bar charts, line graphs, and heatmaps to expose peak-hour congestion, vehicle type distribution, and temporal trends.",
  },
  {
    title: "Export & Reporting",
    description:
      "One-click export of filtered results and chart images for use in academic or professional reports.",
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

export default function TrafficDetails() {
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
            03 / Data Engineering
          </span>
          <h1 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter leading-none">
            Traffic <span className="text-primary">Analysis</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
            A desktop data visualisation tool built with Python and Tkinter to analyse and display
            complex traffic patterns from real-world datasets. The system transforms raw sensor CSV
            exports into interactive charts that reveal congestion patterns, peak hours, and vehicle
            type distributions at a glance.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="flex flex-wrap gap-3 mt-8"
        >
          {["Python", "Tkinter"].map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest border border-primary/30 px-3 py-1.5 text-primary"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a
            href="https://github.com/AshanWijesundara7/Traffic-Data-Analysis-System"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-black text-white border border-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            <Github size={14} /> View Repository
          </a>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border/40" />
      </div>

      {/* Screenshot / Demo placeholder */}
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
            Application <span className="text-primary">Preview</span>
          </h2>

          {/* Desktop app mockup */}
          <div className="relative w-full border border-border/40 bg-card overflow-hidden" style={{ minHeight: "400px" }}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/40 bg-card/80">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-[11px] text-muted-foreground font-mono">
                Traffic Data Analysis System · Python/Tkinter
              </span>
            </div>
            {/* Fake GUI illustration */}
            <div className="p-8 space-y-4">
              <div className="flex gap-4 flex-wrap">
                {["Bar Chart", "Line Graph", "Heatmap", "Export CSV"].map((btn) => (
                  <div key={btn} className="px-4 py-2 border border-primary/30 text-[10px] uppercase tracking-widest text-primary">
                    {btn}
                  </div>
                ))}
              </div>
              {/* Fake bar chart */}
              <div className="border border-border/30 p-6 bg-background/50 space-y-3">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Vehicle Count by Hour — Sample Dataset</p>
                {[
                  { hour: "08:00", pct: 85 },
                  { hour: "09:00", pct: 95 },
                  { hour: "12:00", pct: 60 },
                  { hour: "17:00", pct: 100 },
                  { hour: "18:00", pct: 88 },
                  { hour: "22:00", pct: 25 },
                ].map((row) => (
                  <div key={row.hour} className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-muted-foreground w-12 shrink-0">{row.hour}</span>
                    <div className="flex-1 bg-border/20 h-5 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="absolute inset-y-0 left-0 bg-primary/70"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground w-8 text-right">{row.pct}%</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40">
                ↑ Illustrative preview — actual UI renders inside the Python/Tkinter desktop app
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
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
            Key <span className="text-primary">Features</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.2}
                className="border border-border/40 bg-card p-6 hover:border-primary/40 transition-all group"
              >
                <h3 className="font-heading font-bold uppercase tracking-wide text-sm mb-2 group-hover:text-primary transition-colors">
                  {feat.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feat.description}</p>
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
            Tech <span className="text-primary">Stack</span>
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
          href="/projects/estate-agent"
          className="flex items-center gap-2 text-[11px] uppercase tracking-widest border border-foreground/30 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1"
        >
          <ArrowLeft size={14} /> Estate Agent
        </Link>
        <Link
          href="/projects/chargeup-ui"
          className="flex items-center gap-2 text-[11px] uppercase tracking-widest border border-foreground/30 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1"
        >
          Next Project <ArrowRight size={14} />
        </Link>
      </div>
    </main>
  )
}