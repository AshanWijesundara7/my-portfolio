"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const projects = [
  {
    title: "ChargeUp",
    description:
      "A EV charging station finder application that helps electric vehicle users locate nearby charging stations quickly and easily. The platform provides real-time station information, navigation support, and station management features.",
    tags: ["React Native", "AWS", "MongoDB", "Google Maps API", "Stripe", "Postman"],
    link: "",
    github: "",
  },
  {
    title: "Estate Agent Website",
    description:
      "Developed a responsive property listing platform featuring dynamic search filters and a clean, modern UI for browsing listings.",
    tags: ["React", "HTML", "CSS3"],
    link: "https://vivere-luxe.vercel.app",
    github: "",
  },
  {
    title: "Traffic Data Analysis System",
    description:
      "Engineered a data visualization tool using Python and Tkinter to analyze and display complex traffic patterns from datasets.",
    tags: ["Python", "Tkinter"],
    link: "",
    github: "",
  },
  {
    title: "Mobile App UI/UX Design – ChargeUp",
    description:
      "Designed a complete mobile application UI including wireframes, user flows, and high-fidelity prototypes for the ChargeUp platform.",
    tags: ["Figma"],
    link: "",
    github: "",
  },
]

const n = projects.length

// Wrap index circularly
const wrap = (i: number) => ((i % n) + n) % n

// Shortest circular offset from active: always -2..+2 for n=4
const circularOffset = (index: number, active: number) => {
  const raw = index - active
  // Bring into range [-n/2, n/2]
  let offset = ((raw % n) + n) % n
  if (offset > n / 2) offset -= n
  return offset
}

export function Projects() {
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollAccum = useRef(0)
  const scrollLocked = useRef(false)

  const goNext = () => setActive((prev) => wrap(prev + 1))
  const goPrev = () => setActive((prev) => wrap(prev - 1))

  // Trackpad / mouse-wheel horizontal scroll with momentum fix
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let wheelTimeout: NodeJS.Timeout

    const onWheel = (e: WheelEvent) => {
      const isHorizontal =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) * 0.5 || Math.abs(e.deltaX) > 8
      
      if (!isHorizontal) return
      e.preventDefault()

      // Absorb trackpad momentum while scroll is locked
      if (scrollLocked.current) {
        scrollAccum.current = 0
        return
      }

      scrollAccum.current += e.deltaX

      // Trigger scroll thresholds
      if (scrollAccum.current > 120) {
        scrollAccum.current = 0
        scrollLocked.current = true
        goNext()
        setTimeout(() => { scrollLocked.current = false }, 800)
      } else if (scrollAccum.current < -120) {
        scrollAccum.current = 0
        scrollLocked.current = true
        goPrev()
        setTimeout(() => { scrollLocked.current = false }, 800)
      }

      // Clear partial swipes when user stops scrolling
      clearTimeout(wheelTimeout)
      wheelTimeout = setTimeout(() => {
        scrollAccum.current = 0
      }, 250)
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => {
      el.removeEventListener("wheel", onWheel)
      clearTimeout(wheelTimeout)
    }
  }, [])

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) goNext()
    else if (info.offset.x > 60) goPrev()
  }

  const getStyle = (index: number) => {
    const offset = circularOffset(index, active)
    const abs = Math.abs(offset)
    return {
      zIndex: n - abs,
      x: `${offset * 48}%`,
      scale: abs === 0 ? 1 : abs === 1 ? 0.87 : 0.76,
      opacity: abs === 0 ? 1 : abs === 1 ? 0.4 : 0.15,
      filter: `blur(${abs === 0 ? 0 : abs === 1 ? 3 : 6}px)`,
    }
  }

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto overflow-hidden">
      {/* Heading */}
      <div className="flex justify-center mb-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-center max-w-2xl"
        >
          Featured <span className="text-primary">Prototypes</span>
        </motion.h2>
      </div>

      {/* Stage */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center"
        style={{ height: "540px" }}
      >
        {projects.map((project, index) => {
          const { zIndex, x, scale, opacity, filter } = getStyle(index)
          const isActive = index === active

          return (
            <motion.div
              key={index}
              animate={{ x, scale, opacity, filter }}
              transition={{
                x: { type: "spring", stiffness: 260, damping: 26 },
                scale: { type: "spring", stiffness: 260, damping: 26 },
                opacity: { duration: 0.4, ease: "easeInOut" },
                filter: { duration: 0.4, ease: "easeInOut" },
              }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
              style={{
                position: "absolute",
                width: "min(800px, 92vw)",
                zIndex,
                pointerEvents: isActive ? "auto" : "none",
                cursor: isActive ? "grab" : "default",
                transformOrigin: "center center",
              }}
              className="active:cursor-grabbing"
            >
              <div
                className={`border p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] ${
                  isActive
                    ? "bg-card border-primary/40 shadow-2xl"
                    : "bg-card/30 border-border/20"
                }`}
              >
                {/* Inner Content Animation Wrapper */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0.3,
                    y: isActive ? 0 : 15,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: isActive ? 0.1 : 0,
                  }}
                  className="space-y-5"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                      {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                    </span>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[10px] uppercase tracking-widest text-primary border border-primary/40 px-2 py-0.5"
                      >
                        Active
                      </motion.span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-wide leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base line-clamp-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest border border-primary/30 px-2 py-1 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex gap-6">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <ExternalLink size={15} /> LIVE_VIEW
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm text-muted-foreground/30 cursor-not-allowed">
                        <ExternalLink size={15} /> LIVE_VIEW
                      </span>
                    )}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Github size={15} /> SOURCE_CODE
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm text-muted-foreground/30 cursor-not-allowed">
                        <Github size={15} /> SOURCE_CODE
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-10 px-6">
        <button
          onClick={goPrev}
          className="text-[11px] uppercase tracking-widest text-foreground border border-foreground/30 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]"
        >
          ← Prev
        </button>

        {/* Circular dot indicator */}
        <div className="flex items-center gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? "24px" : "4px",
                height: "3px",
                transition: "all 0.35s ease",
                background:
                  i === active
                    ? "hsl(var(--primary))"
                    : "hsl(var(--muted-foreground) / 0.3)",
              }}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="text-[11px] uppercase tracking-widest text-foreground border border-foreground/30 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]"
        >
          Next →
        </button>
      </div>

      <p className="text-center text-[10px] uppercase tracking-widest text-muted-foreground/30 mt-4">
        Infinite loop · Drag · Swipe · Scroll horizontally
      </p>
    </section>
  )
}