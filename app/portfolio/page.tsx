"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, Variants } from "framer-motion";
import { ArrowUpRight, Code2, Layers, Github, Globe } from "lucide-react";
import { MouseEvent } from "react";

// --- Utility: Spotlight Effect ---
function useMousePosition() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return { mouseX, mouseY, handleMouseMove };
}

// --- Mock Data ---
const projects = [
  {
    id: 1,
    title: "Ceylon Wild Escapes",
    category: "Custom Webiste",
    description:
      "A modern wildlife tourism website designed for performance and storytelling. Built with a responsive layout, smooth page animations, and a custom contact-based booking workflow optimized for accessibility and speed.",
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion"],
    link: "https://www.ceylonwildescapes.com",
    image: "/p001.png",
    year: "2025",
  },
  {
    id: 2,
    title: "GOAT CULT",
    category: "E-Commerce",
    description:
      "An e-commerce fashion brand platform built to showcase products, brand identity, and future scalability. Features include product listings, responsive UI, and a structured frontend ready for payment and order integrations.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://www.goatcult.lk",
    image: "/p2.png",
    year: "2024",
  },
  {
    id: 3,
    title: "Shey Collective",
    category: "Portfolio",
    description:
      "A minimalist brand portfolio website focused on visual storytelling. Includes smooth page transitions, refined typography, and interactive animations to highlight creative work and brand identity.",
    tech: ["Next.js", "GSAP", "Prisma"],
    link: "https://www.sheycollective.com",
    image: "/p3.png",
    year: "2023",
  },
  
];

// --- Animations ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-lime-400 selection:text-black overflow-x-hidden py-50 ">
      
      {/* --- Global Grain Texture --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[50] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- Ambient Glow --- */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-20 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-lime-400 mb-6 font-mono">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"/>
            Portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Selected <br />
            <span className="text-zinc-600">Engineering Works.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            A curation of projects pushing the boundaries of performance, interaction, and scalability.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}

// --- Components ---

function ProjectCard({ project }: { project: any }) {
  const { mouseX, mouseY, handleMouseMove } = useMousePosition();

  return (
    <motion.div variants={fadeInUp} className="h-full">
      <div
        onMouseMove={handleMouseMove}
        className="group relative h-full bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-700 transition-colors duration-500"
      >
        {/* Spotlight Effect Layer */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(163, 230, 53, 0.1),
                transparent 80%
              )
            `,
          }}
        />

        {/* Image Section */}
        <div className="relative h-64 w-full bg-zinc-950 overflow-hidden border-b border-white/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          {/* Dark Overlay that fades on hover */}
          <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
             <span className="bg-zinc-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-xl">
               {project.category}
             </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col h-[calc(100%-16rem)] relative z-20">
          
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white transition-colors">
              {project.title}
            </h3>
            <span className="text-zinc-600 font-mono text-xs pt-1">{project.year}</span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-5 flex-grow">
            {project.description}
          </p>

          <div className="space-y-6 mt-auto">
            {/* Tech Stack */}
            

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-white/5">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 bg-white text-zinc-950 rounded-lg py-2.5 text-sm font-bold hover:bg-lime-400 transition-colors"
                >
                  Live Demo <ArrowUpRight className="w-4 h-4" />
                </a>
                <button className="p-2.5 bg-zinc-800 text-zinc-400 rounded-lg hover:text-white hover:bg-zinc-700 transition-colors">
                    <Github className="w-4 h-4" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}