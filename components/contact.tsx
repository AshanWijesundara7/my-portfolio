"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, ArrowRight, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, and opportunities to contribute to impactful solutions. Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Mail, label: "Email", href: "mailto:ashanmalidu474@gmail.com" },
            { icon: Github, label: "GitHub", href: "https://github.com/AshanWijesundara7" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ashan-wijesundara-36b80431a"},
            { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/malidu.a" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-3 p-6 bg-card/30 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <social.icon size={24} className="group-hover:text-primary transition-colors" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-heading">{social.label}</span>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="pt-12">
          <a
            href="/AshanWijesundara.pdf"
            download
            className="inline-flex items-center gap-4 px-12 py-5 font-heading font-bold uppercase tracking-widest transition-all duration-300 group border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground dark:border-foreground dark:bg-foreground dark:text-background dark:hover:bg-background dark:hover:text-foreground hover:-translate-y-2"
          >
            Download Resume <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
