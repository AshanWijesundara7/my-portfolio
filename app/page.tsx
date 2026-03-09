import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { Navbar } from "@/components/navbar"
import { CustomCursor } from "@/components/cursor"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Navbar />

      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />

      <footer className="py-24 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-primary rotate-45 flex items-center justify-center">
              <span className="text-xs font-bold -rotate-45">A</span>
            </div>
            <span className="font-heading font-bold uppercase tracking-widest text-sm">
              <span className="text-primary">AMW</span>
            </span>
          </div>

          <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50 font-heading text-center">
            © 2025 ALL RIGHTS RESERVED.
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-heading">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
