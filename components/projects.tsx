"use client"

import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { useRef } from "react"
import { projects } from "@/lib/projectsData"

export { projects }

const n = projects.length

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="flex justify-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-center max-w-2xl"
        >
          Featured <span className="text-primary">Prototypes</span>
        </motion.h2>
      </div>

      {/* Scrollable timeline container — shows ~4 cards, rest revealed on scroll */}
      <div
        className="relative overflow-y-auto pr-2"
        style={{
          maxHeight: "calc(4 * 240px)",
          scrollbarWidth: "thin",
          scrollbarColor: "hsl(var(--primary) / 0.3) transparent",
        }}
      >
        {/* Vertical spine */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/40 md:-translate-x-px pointer-events-none" />

        <div className="space-y-0">
          {projects.map((project, index) => (
            <TimelineCard
              key={index}
              project={project}
              index={index}
              total={n}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>

        {/* End node */}
        <div className="relative flex justify-start md:justify-center mt-0">
          <div className="relative left-4 md:left-0 flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-primary/40 border border-primary" />
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40 font-mono mt-3 mb-4">
              end_of_log
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center mt-6">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40 font-mono flex items-center gap-2">
          <span className="inline-block animate-bounce">↓</span>
          Scroll to explore all {n} projects
          <span className="inline-block animate-bounce">↓</span>
        </p>
      </div>
    </section>
  )
}

function TimelineCard({
  project,
  index,
  total,
  side,
}: {
  project: (typeof projects)[0]
  index: number
  total: number
  side: "left" | "right"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const isLeft = side === "left"

  return (
    <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[240px]">

      {/* Desktop: left side content or spacer */}
      <div className={`hidden md:flex ${isLeft ? "justify-end pr-12" : ""} items-center`}>
        {isLeft && (
          <CardContent project={project} index={index} total={total} inView={inView} align="right" />
        )}
      </div>

      {/* Spine node */}
      <div className="absolute left-4 md:left-1/2 top-1/2 md:-translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-3 h-3 rounded-full bg-background border-2 border-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
        />
      </div>

      {/* Desktop: right side content or spacer */}
      <div className={`hidden md:flex ${!isLeft ? "justify-start pl-12" : ""} items-center`}>
        {!isLeft && (
          <CardContent project={project} index={index} total={total} inView={inView} align="left" />
        )}
      </div>

      {/* Mobile: always left-indented */}
      <div className="md:hidden pl-12 py-6 col-span-1">
        <CardContent project={project} index={index} total={total} inView={inView} align="left" />
      </div>
    </div>
  )
}

function CardContent({
  project,
  index,
  total,
  inView,
  align,
}: {
  project: (typeof projects)[0]
  index: number
  total: number
  inView: boolean
  align: "left" | "right"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? 40 : -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="w-full max-w-[460px] my-8"
    >
      <div className="group relative border border-border/50 bg-card/30 hover:bg-card hover:border-primary/40 transition-all duration-500 p-8 hover:-translate-y-1">

        {/* Corner accents */}
        <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />

        {/* Index label */}
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide leading-tight mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest border border-primary/30 px-2 py-1 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4 items-center">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs hover:text-primary transition-colors"
              >
                <ExternalLink size={13} /> LIVE_VIEW
              </a>
            ) : (
              <span className="flex items-center gap-2 text-xs text-muted-foreground/30 cursor-not-allowed">
                <ExternalLink size={13} /> LIVE_VIEW
              </span>
            )}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs hover:text-primary transition-colors"
              >
                <Github size={13} /> SOURCE
              </a>
            ) : (
              <span className="flex items-center gap-2 text-xs text-muted-foreground/30 cursor-not-allowed">
                <Github size={13} /> SOURCE
              </span>
            )}
          </div>
          <a
            href={`/projects/${project.slug}`}
            className="flex items-center gap-2 px-5 py-2 bg-foreground text-background text-[10px] font-semibold uppercase tracking-widest hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}