"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Sun, Moon, Download, Menu, X } from "lucide-react"
import { useTheme } from "@/providers/theme-provider"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)  // ← fixed: was `handleScroll()`
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["About", "Skills", "Projects", "Contact"]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 sm:py-6 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          {/* Left - Logo */}
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold uppercase tracking-wider text-base sm:text-lg">AMW.</span>
          </div>

          {/* Center - Pill Navigation (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-8 bg-foreground/5 border border-foreground/20 rounded-full px-8 py-3 backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-sans text-sm uppercase tracking-wide hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right - CV Button, Theme Toggle, Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4">

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:-translate-y-2"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:-translate-y-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-20 left-0 w-full z-40 bg-background border-b border-foreground/20 lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4 max-w-7xl mx-auto">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
              className="block font-sans text-sm uppercase tracking-wide hover:text-primary transition-colors py-2"
            >
              {item}
            </motion.a>
          ))}
          <a
            href="/resume.pdf"
            download
            onClick={handleNavClick}
            className="block mt-4 w-full bg-foreground text-background px-6 py-3 rounded-lg font-sans text-sm font-semibold uppercase tracking-wide text-center hover:bg-background hover:text-foreground hover:border hover:border-foreground transition-all duration-300 hover:-translate-y-2"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </>
  )
}