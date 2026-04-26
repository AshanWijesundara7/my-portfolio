"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown } from "lucide-react"

// ── Splash Screen ─────────────────────────────────────────────────────────────

function useTyped(text: string, speed: number, start: boolean) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!start) return
    setDisplayed("")
    setDone(false)
    let i = 0
    const id = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(id)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(id)
  }, [start, text, speed])

  return { displayed, done }
}

function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"hello" | "loading">("hello")
  const hello = useTyped("HELLO!", 90, phase === "hello")
  const loading = useTyped("Loading portfolio...", 55, phase === "loading")

  useEffect(() => {
    if (hello.done) {
      const t = setTimeout(() => setPhase("loading"), 400)
      return () => clearTimeout(t)
    }
  }, [hello.done])

  useEffect(() => {
    if (loading.done) {
      const t = setTimeout(onDone, 600)
      return () => clearTimeout(t)
    }
  }, [loading.done, onDone])

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background px-8"
    >
      <div className="font-mono flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {phase === "hello" && (
            <motion.div
              key="hello"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-4xl md:text-6xl font-bold flex items-center justify-center"
            >
              {hello.displayed}
              {!hello.done && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block bg-foreground w-[4px] h-[0.85em] ml-1 rounded-[1px]"
                />
              )}
            </motion.div>
          )}
          {phase === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm md:text-base flex items-center justify-center text-foreground/70"
            >
              {loading.displayed}
              {!loading.done && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block bg-foreground/70 w-[2px] h-[1em] ml-0.5 rounded-[1px]"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// ── Hero Name Typing ──────────────────────────────────────────────────────────

const HERO_TEXT = "Hello, I'm\n\nASHAN\nWIJESUNDARA"

function useHeroTyping() {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < HERO_TEXT.length) {
        setDisplayed(HERO_TEXT.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        setDone(true)
      }
    }, 55)
    return () => clearInterval(interval)
  }, [])

  return { displayed, done }
}

function HeroName() {
  const { displayed, done } = useHeroTyping()

  // Split into lines so we can style them differently
  const lines = displayed.split("\n")
  const greeting = lines[0] ?? ""          // "Hello, I'm"
  const blank = lines[1] ?? ""             // ""
  const firstName = lines[2] ?? ""         // "ASHAN"
  const lastName = lines[3] ?? ""          // "WIJESUNDARA"

  const isOnGreeting = lines.length === 1
  const isOnBlank = lines.length === 2
  const isOnFirst = lines.length === 3
  const isOnLast = lines.length === 4 && !done

  return (
    <div className="text-center space-y-4 w-full">
      {/* Greeting */}
      <p className="font-sans text-sm uppercase tracking-widest text-foreground/60">
        {greeting}
        {isOnGreeting && <Cursor />}
      </p>

      {/* Spacer line — only rendered once we're past it */}
      {lines.length >= 2 && <div className="hidden">{blank}</div>}

      {/* Name */}
      <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-heading font-bold uppercase tracking-tight leading-none w-full break-words">
        {firstName && (
          <span>
            {firstName}
            {isOnFirst && <Cursor large />}
          </span>
        )}
        {lastName && (
          <>
            <br />
            <span>
              {lastName}
              {isOnLast && <Cursor large />}
            </span>
          </>
        )}
      </h1>
    </div>
  )
}

function Cursor({ large, steady }: { large?: boolean; steady?: boolean }) {
  return (
    <motion.span
      animate={steady ? { opacity: [1, 0] } : { opacity: [1, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      className={`inline-block bg-foreground/70 ml-0.5 align-middle ${large ? "w-[3px] h-[0.8em]" : "w-[2px] h-4"}`}
    />
  )
}

// ── Hero Component ────────────────────────────────────────────────────────────

import { useLayoutEffect } from "react"

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

// In-memory flag: Resets on page refresh, but persists during client-side navigation
let globalSplashShown = false

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const [splashDone, setSplashDone] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setIsMounted(true)
    if (globalSplashShown) {
      setSplashDone(true)
    }
  }, [])

  const handleSplashDone = () => {
    globalSplashShown = true
    setSplashDone(true)
  }

  return (
    <>
      {/* Curtain to prevent reverse flash during SSR hydration */}
      {!isMounted && <div className="fixed inset-0 z-[100] bg-background" />}

      {/* Splash typing screen */}
      <AnimatePresence>
        {isMounted && !splashDone && <SplashScreen onDone={handleSplashDone} />}
      </AnimatePresence>

      {/* Real hero section — fades in after splash */}
      <AnimatePresence>
        {splashDone && (
          <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col items-center justify-center max-w-3xl text-center space-y-8 w-full"
            >
              {/* Typing name animation */}
              <HeroName />

              {/* University */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="font-sans text-base md:text-xl text-foreground/70 font-normal"
              >
                Computer Science Undergraduate <br />
                <span className="text-foreground/50 text-sm md:text-base">at University of Westminster</span>
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="font-sans text-sm md:text-lg text-foreground/60 max-w-2xl leading-relaxed px-2"
              >
                Passionate about building scalable web applications and backend systems.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto px-4 sm:px-0"
              >
                <a
                  href="#projects"
                  className="w-full sm:w-auto text-center px-8 py-3 bg-foreground text-background font-sans font-semibold uppercase tracking-wide text-sm hover:bg-background hover:text-foreground hover:border hover:border-foreground transition-all duration-300 hover:-translate-y-2"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto text-center px-8 py-3 bg-background text-foreground border-2 border-foreground font-sans font-semibold uppercase tracking-wide text-sm hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-2"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <ArrowDown size={24} className="text-foreground/40" />
            </motion.div>
          </section>
        )}
      </AnimatePresence>
    </>
  )
}