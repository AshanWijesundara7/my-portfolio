"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Sun, Moon, Download } from "lucide-react"
import { useTheme } from "@/providers/theme-provider"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold uppercase tracking-wider text-lg">AMW.</span>
        </div>

        {/* Center - Centered Pill Navigation Container */}
        <motion.div 
          className="hidden md:flex items-center gap-8 bg-foreground/5 border border-foreground/20 rounded-full px-8 py-3 backdrop-blur-sm"
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }}
          transition={{ duration: 0.3 }}
        >
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-sans text-sm uppercase tracking-wide relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Right - CV Button and Theme Toggle */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 20 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="p-2 rounded-full border border-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
