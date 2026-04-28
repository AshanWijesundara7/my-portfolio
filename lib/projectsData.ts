// lib/projectsData.ts
// ─── Single source of truth for all project data ──────────────────────────────
// ✅ No "use client" — safe to import in both API routes and components
// ✅ Add a new project here → chatbot + portfolio both auto-update

export type Project = {
  title: string
  slug: string
  description: string
  tags: string[]
  link: string
  github: string
}

export const projects: Project[] = [
  {
    title: "ChargeUp Group Project",
    slug: "chargeup",
    description:
      "A EV charging station finder application that helps electric vehicle users locate nearby charging stations quickly and easily. The platform provides real-time station information, navigation support, and station management features.",
    tags: ["React Native", "AWS", "MongoDB", "Google Maps API", "Stripe", "Postman"],
    link: "https://chargeupsl.vercel.app/",
    github: "https://github.com/AshanWijesundara7/ChargeUp2",
  },
  {
    title: "Smart Campus API",
    slug: "smart-campus-api",
    description:
      "A RESTful API built with JAX-RS (Jersey) for managing campus rooms and IoT sensors. Features full CRUD, sensor readings history, sub-resource locators, query filtering, and HATEOAS discovery — all backed by thread-safe in-memory data stores.",
    tags: ["Java", "JAX-RS", "Jersey", "Maven", "REST API"],
    link: "",
    github: "https://github.com/AshanWijesundara7",
  },
  {
    title: "Estate Agent Website",
    slug: "estate-agent",
    description:
      "Developed a responsive property listing platform featuring dynamic search filters and a clean, modern UI for browsing listings.",
    tags: ["React", "HTML", "CSS3"],
    link: "https://vivere-luxe.vercel.app",
    github: "https://github.com/AshanWijesundara7/estate-agent-website",
  },
  {
    title: "Traffic Data Analysis System",
    slug: "traffic-data",
    description:
      "Engineered a data visualization tool using Python and Tkinter to analyze and display complex traffic patterns from datasets.",
    tags: ["Python", "Tkinter"],
    link: "",
    github: "https://github.com/AshanWijesundara7/Traffic-Data-Analysis-System",
  },
  {
    title: "Mobile App UI/UX Design – ChargeUp",
    slug: "chargeup-ui",
    description:
      "Designed a complete mobile application UI including wireframes, user flows, and high-fidelity prototypes for the ChargeUp platform.",
    tags: ["Figma"],
    link: "",
    github: "",
  },
]