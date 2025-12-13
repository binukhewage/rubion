"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

// --- Mock Data ---
const projects = [
  {
    id: 1,
    title: "Ceylon Wild Escapes",
    category: "Web Development",
    description:
      "Ceylon Wild Escapes is a modern, responsive wildlife tourism website built with performance, accessibility, and scalability in mind. The project emphasizes clean UI design and SEO optimization.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com/project-1",
    accentColor: "bg-lime-400",
    image: "/p1.png", 
  },
  {
    id: 2,
    title: "GOAT CULT",
    category: "E-Commerce",
    description:
      "G.O.A.T CULT is a scalable e-commerce buying and selling platform. The system supports product listings, user accounts, and streamlined transactions with a mobile-first design.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://www.goatcult.lk",
    accentColor: "bg-cyan-400",
    image: "/p2.png", 
  },
];

// --- Animations ---
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // replaces "easeOut"
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};


export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-lime-300 selection:text-black overflow-x-hidden">
      {/* --- Background Gradient Mesh --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-lime-300/30 rounded-full blur-[100px] mix-blend-multiply"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-green-200/40 rounded-full blur-[120px] mix-blend-multiply"
        />
      </div>

      

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
            Selected <br />
            <span className="bg-zinc-900 text-white px-4 rounded-xl inline-block transform -rotate-1">
              Works
            </span>{" "}
            & Projects.
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl">
            A curated selection of projects that showcase my skills in design,
            development, and strategy.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          // GRID LAYOUT: 1 column on mobile, 2 columns on large screens
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}

// --- Project Card Component ---

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div variants={fadeInUp} className="group h-full">
      <div className="bg-zinc-950 text-white rounded-[2rem] overflow-hidden relative border border-zinc-800 transition-all duration-500 hover:shadow-2xl hover:shadow-lime-900/20 hover:border-zinc-700 h-full flex flex-col">
        
        {/* Internal Glow matching project accent */}
        <div
          className={`absolute top-0 right-0 w-[400px] h-[400px] ${project.accentColor} opacity-10 rounded-full blur-[100px] group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
        />

        {/* Top: Image Preview */}
        <div className="relative h-[250px] sm:h-[350px] w-full bg-zinc-900 border-b border-zinc-800 overflow-hidden group-hover:border-zinc-700 transition-colors">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay Gradient for Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none" />
        </div>

        {/* Bottom: Content */}
        <div className="p-8 flex flex-col flex-1 relative z-10">
          
          <div className="flex items-center justify-between mb-6">
            <span className="border border-zinc-700 px-3 py-1 rounded-full text-xs uppercase tracking-widest bg-zinc-900/50 backdrop-blur-md">
              {project.category}
            </span>
            <span className="text-zinc-500 text-xs font-mono">
              0{index + 1}
            </span>
          </div>

          <h3 className="text-3xl font-bold mb-4 leading-tight group-hover:text-lime-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Spacer to push buttons to bottom */}
          <div className="mt-auto pt-6 flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <div
                  key={t}
                  className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 bg-zinc-900/50 border border-zinc-800 px-2.5 py-1.5 rounded-md"
                >
                  <Code2 className="w-3 h-3 opacity-50" />
                  {t}
                </div>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white text-black rounded-full px-6 py-3 font-bold text-sm hover:bg-lime-400 transition-all group/btn"
            >
              Visit Live Site
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}