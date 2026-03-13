"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Centered Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center max-w-3xl text-center space-y-8 w-full"
      >
        {/* Greeting */}
        <p className="font-sans text-sm uppercase tracking-widest text-foreground/60">
          Hello, I'm
        </p>

        {/* Main Name - Responsive scaling */}
        <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-heading font-bold uppercase tracking-tight leading-none w-full break-words">
          ASHAN<br />WIJESUNDARA
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base md:text-xl text-foreground/70 font-normal">
          Computer Science Undergraduate <br /> at University of Westminster
        </p>

        {/* Description */}
        <p className="font-sans text-sm md:text-lg text-foreground/60 max-w-2xl leading-relaxed px-2">
          Passionate about building scalable web applications and backend systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto px-4 sm:px-0">
          {/* Primary Button */}
          <a
            href="#projects"
            className="w-full sm:w-auto text-center px-8 py-3 bg-foreground text-background font-sans font-semibold uppercase tracking-wide text-sm hover:bg-background hover:text-foreground hover:border hover:border-foreground transition-all duration-300"
          >
            View Projects
          </a>

          {/* Secondary Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-8 py-3 bg-background text-foreground border-2 border-foreground font-sans font-semibold uppercase tracking-wide text-sm hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown size={24} className="text-foreground/40" />
      </motion.div>
    </section>
  )
}