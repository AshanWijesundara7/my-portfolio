"use client"

import { motion, type Variants } from "framer-motion"
import { Github, ArrowLeft, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa"

const techStack = [
    { name: "React", icon: <FaReact /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
]

const screenshots = [
    { label: "Homepage", bg: "from-slate-800 to-slate-900" },
    { label: "Listings", bg: "from-zinc-800 to-zinc-900" },
    { label: "Property Detail", bg: "from-neutral-800 to-neutral-900" },
]

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
}

export default function EstateAgentDetails() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Back nav */}
            <div className="max-w-7xl mx-auto px-6 pt-8">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>
            </div>

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={0}
                    className="space-y-4"
                >
                    <span className="text-[10px] uppercase tracking-widest text-primary font-mono border border-primary/30 px-3 py-1">
                        02 / Web Application
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter leading-none">
                        Estate <span className="text-primary">Agent</span>
                    </h1>
                    <p className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
                        A responsive property listing platform featuring dynamic search filters and a clean,
                        modern UI for browsing listings. Built with React and styled entirely with custom CSS3 —
                        no UI libraries, just hand-crafted components that prioritize performance and user
                        experience.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={1}
                    className="flex flex-wrap gap-3 mt-8"
                >
                    {["React", "HTML5", "CSS3"].map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] uppercase tracking-widest border border-primary/30 px-3 py-1.5 text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={2}
                    className="flex flex-wrap gap-4 mt-8"
                >
                    <a
                        href="https://vivere-luxe.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-black text-white border border-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
                    >
                        <ExternalLink size={14} /> Live Site
                    </a>
                    <a
                        href="https://github.com/AshanWijesundara7/estate-agent-website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-foreground/30 text-xs font-semibold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
                    >
                        <Github size={14} /> Source Code
                    </a>
                </motion.div>
            </section>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-px bg-border/40" />
            </div>

            {/* Live Website Embed */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                    className="space-y-6"
                >
                    <h2 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight">
                        Live <span className="text-primary">Preview</span>
                    </h2>
                    <div
                        className="relative w-full border border-border/40 bg-card overflow-hidden"
                        style={{ height: "600px" }}
                    >
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-card/80">
                            <span className="w-3 h-3 rounded-full bg-red-500/70" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <span className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-4 text-[11px] text-muted-foreground font-mono">
                                vivere-luxe.vercel.app
                            </span>
                            <a
                                href="https://vivere-luxe.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-auto text-[10px] uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
                            >
                                <ExternalLink size={10} /> Open
                            </a>
                        </div>
                        <iframe
                            src="https://vivere-luxe.vercel.app"
                            className="w-full"
                            style={{ height: "calc(100% - 44px)", border: "none" }}
                            title="Estate Agent Live Website"
                        />
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50">
                        ↑ Live preview · Click "Open" if the embed is blocked
                    </p>
                </motion.div>
            </section>

            {/* Tech Stack */}
            <section className="max-w-7xl mx-auto px-6 pb-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                    className="space-y-8"
                >
                    <h2 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight">
                        Tech <span className="text-primary">Stack</span>
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i * 0.5}
                                className="flex flex-col items-center gap-3 border border-border/40 p-8 bg-card hover:border-primary/40 transition-colors group"
                            >
                                <span className="text-4xl">{tech.icon}</span>
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors text-center">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Footer nav */}
            <div className="max-w-7xl mx-auto px-6 pb-16 flex justify-between items-center">
                <Link
                    href="/projects/chargeup"
                    className="flex items-center gap-2 text-[11px] uppercase tracking-widest border border-foreground/30 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1"
                >
                    <ArrowLeft size={14} /> ChargeUp
                </Link>
                <Link
                    href="/projects/traffic-data"
                    className="flex items-center gap-2 text-[11px] uppercase tracking-widest border border-foreground/30 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1"
                >
                    Next Project <ArrowRight size={14} />
                </Link>
            </div>
        </main>
    )
}