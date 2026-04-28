"use client"

import { motion, type Variants } from "framer-motion"
import { Github, ArrowLeft, Server, Database, Shield, Filter, BookOpen } from "lucide-react"
import Link from "next/link"

// ── Data ──────────────────────────────────────────────────────────────────────

const techStack = [
  { name: "Java", icon: "☕" },
  { name: "JAX-RS", icon: "🔗" },
  { name: "Jersey", icon: "⚙️" },
  { name: "Maven", icon: "📦" },
  { name: "REST API", icon: "🌐" },
  { name: "JSON", icon: "{ }" },
]

const endpoints = [
  {
    method: "GET",
    path: "/api/v1",
    desc: "Discovery — lists all available resource links",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/30",
  },
  {
    method: "GET",
    path: "/api/v1/rooms",
    desc: "Fetch all campus rooms",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/30",
  },
  {
    method: "POST",
    path: "/api/v1/rooms",
    desc: "Create a new room",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/30",
  },
  {
    method: "DELETE",
    path: "/api/v1/rooms/{roomId}",
    desc: "Delete room — 409 if sensors attached",
    color: "text-red-400",
    bg: "bg-red-400/10 border-red-400/30",
  },
  {
    method: "GET",
    path: "/api/v1/sensors?type=CO2",
    desc: "Filter sensors by type via @QueryParam",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/30",
  },
  {
    method: "POST",
    path: "/api/v1/sensors/{id}/readings",
    desc: "Log a sensor reading — 403 if MAINTENANCE",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/30",
  },
]

const features = [
  {
    icon: <Server size={20} />,
    title: "JAX-RS Sub-Resource Locators",
    desc: "Sensor readings are handled by a dedicated SensorReadingResource class, keeping each resource focused on a single responsibility.",
  },
  {
    icon: <Database size={20} />,
    title: "Thread-Safe In-Memory Store",
    desc: "All data lives in a singleton DataStore backed by ConcurrentHashMap — safe under concurrent HTTP requests without manual synchronization.",
  },
  {
    icon: <Shield size={20} />,
    title: "Global Exception Mapper",
    desc: "Catches all unhandled exceptions and returns generic error responses, preventing stack traces and internal details from leaking to clients.",
  },
  {
    icon: <Filter size={20} />,
    title: "Request/Response Logging Filter",
    desc: "A JAX-RS ContainerRequestFilter logs every request and response automatically — no manual logging boilerplate in resource methods.",
  },
  {
    icon: <BookOpen size={20} />,
    title: "HATEOAS Discovery",
    desc: "The root endpoint returns navigable links to all resources so clients can explore the API without hardcoding URLs.",
  },
]

const structure = [
  "smart-campus-api/",
  "├── pom.xml",
  "└── src/main/java/com/smartcampus/",
  "    ├── Main.java",
  "    ├── SmartCampusApplication.java",
  "    ├── model/",
  "    │   ├── Room.java",
  "    │   ├── Sensor.java",
  "    │   └── SensorReading.java",
  "    ├── store/",
  "    │   └── DataStore.java",
  "    ├── resource/",
  "    │   ├── DiscoveryResource.java",
  "    │   ├── RoomResource.java",
  "    │   ├── SensorResource.java",
  "    │   └── SensorReadingResource.java",
  "    └── filter/",
  "        └── LoggingFilter.java",
]

// ── Animation ─────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SmartCampusDetails() {
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
            02 / Solo Project
          </span>
          <h1 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter leading-none">
            Smart<span className="text-primary">Campus</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
            A production-ready RESTful API built with JAX-RS (Jersey) for managing campus rooms
            and IoT sensors. Features full CRUD, sensor reading history, sub-resource locators,
            query filtering, HATEOAS discovery, and a global exception mapper — all running on
            an embedded Grizzly HTTP server.
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="flex flex-wrap gap-3 mt-8"
        >
          {["Java", "JAX-RS", "Jersey", "Maven", "REST API", "Grizzly"].map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest border border-primary/30 px-3 py-1.5 text-primary"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a
            href="https://www.loom.com/share/21b5a3ebb61543788fdaab544630050e"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            ▶ Demo Video
          </a>
          <a
            href="https://github.com/AshanWijesundara7"
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

      {/* Demo Video */}
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
            Demo <span className="text-primary">Video</span>
          </h2>
          <div className="relative w-full aspect-video bg-card border border-border/40 overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/smart-campus-demo.mp4"
              controls
              muted
              playsInline
              title="Smart Campus API Demo"
            />
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border/40" />
      </div>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight">
            Key <span className="text-primary">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.2}
                className="border border-border/40 bg-card p-6 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1 space-y-3"
              >
                <div className="text-primary">{f.icon}</div>
                <h3 className="font-heading font-bold uppercase tracking-wide text-sm">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border/40" />
      </div>

      {/* API Endpoints */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight">
            API <span className="text-primary">Endpoints</span>
          </h2>
          <div className="space-y-3">
            {endpoints.map((ep, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.1}
                className={`flex flex-col sm:flex-row sm:items-center gap-3 border px-5 py-4 ${ep.bg} transition-all duration-300`}
              >
                <span className={`font-mono font-bold text-xs uppercase tracking-widest w-14 shrink-0 ${ep.color}`}>
                  {ep.method}
                </span>
                <code className="font-mono text-xs text-foreground/80 flex-1">{ep.path}</code>
                <span className="text-[11px] text-muted-foreground">{ep.desc}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40">
            Base URL: http://localhost:8080/api/v1
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border/40" />
      </div>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-6 py-16">
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
                custom={i * 0.15}
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

      {/* Project Structure */}
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
            Project <span className="text-primary">Structure</span>
          </h2>
          <div className="border border-border/40 bg-card p-6 overflow-x-auto">
            <pre className="font-mono text-xs text-muted-foreground leading-relaxed">
              {structure.join("\n")}
            </pre>
          </div>

          {/* How to run */}
          <div className="space-y-3 pt-4">
            <h3 className="font-heading font-bold uppercase tracking-widest text-sm text-primary">
              How to Run
            </h3>
            <div className="border border-border/40 bg-card p-5 space-y-2">
              {[
                "git clone https://github.com/AshanWijesundara7/smart-campus-api.git",
                "cd smart-campus-api",
                "mvn clean package",
                "java -jar target/smart-campus-api-1.0-SNAPSHOT.jar",
              ].map((cmd, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary font-mono text-xs mt-0.5 shrink-0">$</span>
                  <code className="font-mono text-xs text-foreground/80">{cmd}</code>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground/50 uppercase tracking-widest">
              Server starts at http://localhost:8080/api/v1 · Requires Java 11+ and Maven 3.6+
            </p>
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