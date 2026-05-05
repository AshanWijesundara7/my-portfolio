"use client"

import { motion, type Variants } from "framer-motion"
import { Github, Instagram, Linkedin, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { FaReact, FaAws, FaStripe } from "react-icons/fa"
import { SiMongodb, SiGooglemaps, SiPostman } from "react-icons/si"

const teamMembers = [
    {
        name: "Ashan Wijesundara",
        role: "Full Stack Developer / UI & UX Designer ",
        github: "https://github.com/AshanWijesundara7",
        linkedin: "https://www.linkedin.com/in/ashan-wijesundara-36b80431a",
        instagram: "https://www.instagram.com/malidu.a",
        avatar: "AW",
    },
    {
        name: "Vihanga Randima",
        role: "Full Stack Developer",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
        avatar: "VR",
    },
    {
        name: "Sandalli Kawmudi",
        role: "Frontend Developer",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
        avatar: "SK",
    },
    {
        name: "Tishini Maneesha",
        role: "Frontend Developer",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
        avatar: "TM",
    },
    {
        name: "Sasini Yashoba",
        role: "Frontend Developer",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
        avatar: "SY",
    },
    {
        name: "Tashmith Mesith",
        role: "Frontend Developer",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
        avatar: "TM",
    },
]

const techStack = [
    { name: "React Native", icon: <FaReact /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Google Maps API", icon: <SiGooglemaps /> },
    { name: "Stripe", icon: <FaStripe /> },
    { name: "Postman", icon: <SiPostman /> },
]

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
}

export default function ChargeupDetails() {
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
                        01 / Group Project
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter leading-none">
                        Charge<span className="text-primary">Up</span>
                    </h1>
                    <p className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
                        A full-stack EV charging station finder application that helps electric vehicle users
                        locate nearby charging stations quickly and easily. The platform provides real-time
                        station information, seamless navigation support, and comprehensive station management
                        features — built end-to-end by a team of six.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={1}
                    className="flex flex-wrap gap-3 mt-8"
                >
                    {["React Native", "AWS", "MongoDB", "Google Maps API", "Stripe", "Postman"].map((tag) => (
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
                        href="https://chargeupsl.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-black text-white border border-white text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
                    >
                        <ExternalLink size={14} /> Live Site
                    </a>
                    <a
                        href="https://github.com/AshanWijesundara7/ChargeUp2"
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

            {/* Marketing Video */}
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
                        Marketing <span className="text-primary">Video</span>
                    </h2>
                    <div className="relative w-full aspect-video bg-card border border-border/40 overflow-hidden">
                        {/* Replace the src below with your actual YouTube embed or video URL */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            src="/marketing.mp4"
                            title="ChargeUp Demo Video"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </motion.div>
            </section>

            {/* Live Website Embed */}
            <section className="max-w-7xl mx-auto px-6 pb-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                    className="space-y-6"
                >
                    <h2 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight">
                        Live <span className="text-primary">Platform</span>
                    </h2>
                    <div className="relative w-full border border-border/40 bg-card overflow-hidden" style={{ height: "600px" }}>
                        {/* Browser chrome bar */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-card/80">
                            <span className="w-3 h-3 rounded-full bg-red-500/70" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <span className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-4 text-[11px] text-muted-foreground font-mono">
                                chargeupsl.vercel.app
                            </span>
                        </div>
                        <iframe
                            src="https://chargeupsl.vercel.app/"
                            className="w-full"
                            style={{ height: "calc(100% - 44px)", border: "none" }}
                            title="ChargeUp Live Website"
                        />
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50">
                        ↑ Live preview · Some sites may block embedding — open link directly if blank
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i * 0.5}
                                className="flex flex-col items-center gap-3 border border-border/40 p-6 bg-card hover:border-primary/40 transition-colors group"
                            >
                                <span className="text-3xl">{tech.icon}</span>
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors text-center">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-px bg-border/40" />
            </div>

            {/* Team */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                    className="space-y-10"
                >
                    <h2 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight">
                        The <span className="text-primary">Team</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i * 0.2}
                                className="border border-border/40 bg-card p-6 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
                            >
                                {/* Avatar */}
                                <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                                    <span className="text-primary font-heading font-bold text-sm tracking-widest">
                                        {member.avatar}
                                    </span>
                                </div>
                                <h3 className="font-heading font-bold uppercase tracking-wide text-base mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-muted-foreground text-[11px] uppercase tracking-widest mb-5">
                                    {member.role}
                                </p>
                                {/* Social links */}
                                <div className="flex gap-3">
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border border-border/40 hover:border-primary/40 px-3 py-1.5"
                                    >
                                        <Github size={12} /> Git
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border border-border/40 hover:border-primary/40 px-3 py-1.5"
                                    >
                                        <Linkedin size={12} /> In
                                    </a>
                                    <a
                                        href={member.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border border-border/40 hover:border-primary/40 px-3 py-1.5"
                                    >
                                        <Instagram size={12} /> IG
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Footer nav */}
            <div className="max-w-7xl mx-auto px-6 pb-16 flex justify-between items-center">
                <Link
                    href="/#projects"
                    className="flex items-center gap-2 text-[11px] uppercase tracking-widest border border-foreground/30 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1"
                >
                    <ArrowLeft size={14} /> All Projects
                </Link>
                <Link
                    href="/projects/estate-agent"
                    className="flex items-center gap-2 text-[11px] uppercase tracking-widest border border-foreground/30 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1"
                >
                    Next Project →
                </Link>
            </div>
        </main>
    )
}