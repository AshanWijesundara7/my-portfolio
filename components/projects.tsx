"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "ChargeUp",
    description: "A EV charging station finder application that helps electric vehicle users locate nearby charging stations quickly and easily. The platform provides real-time station information, navigation support, and station management features. It aims to improve the EV charging experience through a simple and user-friendly interface.",
    tags: ["React native", "Amazon web services", "MongoDB","Google map API","Strip payment getaway", "postman"],
    link: "",
    github: "",
  },
  {
    title: "Estate Agent Website",
    description: "Developed a responsive property listing platform featuring dynamic search filters.",
    tags: ["React", "HTML","CSS3"],
    link: "https://vivere-luxe.vercel.app",
    github: "",
  },
  {
    title: "Traffic Data Analysis System",
    description: "Engineered a data visualization tool using Python and Tkinter to analyze and display complex traffic patterns from datasets",
    tags: ["Python","Tkinter"],
    link: "",
    github: "",
  },
  {
    title: "Mobile App UI/UX Design – ChargeUp",
    description: "Designed a complete mobile application UI including wireframes, user flows, and high-fidelity prototypes.",
    tags: ["Figma"],
    link: "",
    github: "",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-center max-w-2xl"
        >
          Featured <span className="text-primary">Prototypes</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-card/50 border border-border/50 p-8 space-y-4"
          >
            <h3 className="text-2xl font-heading font-bold uppercase tracking-wide">{project.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>

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

            <div className="pt-4 flex gap-6">
              <a href={project.link} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <ExternalLink size={16} /> LIVE_VIEW
              </a>
              <a
                href={project.github}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Github size={16} /> SOURCE_CODE
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
