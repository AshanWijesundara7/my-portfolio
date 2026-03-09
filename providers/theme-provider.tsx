"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Initialize theme on mount
    const saved = localStorage.getItem("theme") as Theme | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const theme = saved || (prefersDark ? "dark" : "light")
    const shouldBeDark = theme === "dark"
    
    setIsDark(shouldBeDark)
    applyTheme(theme)
    setMounted(true)
  }, [])

  const applyTheme = (theme: Theme) => {
    const html = document.documentElement
    if (theme === "dark") {
      html.classList.add("dark")
      document.documentElement.style.colorScheme = "dark"
    } else {
      html.classList.remove("dark")
      document.documentElement.style.colorScheme = "light"
    }
    localStorage.setItem("theme", theme)
  }

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(!isDark)
    applyTheme(newTheme)
  }

  // Return children even during hydration to avoid mismatch
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
