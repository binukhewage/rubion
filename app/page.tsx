"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  ArrowRight,
  MoveRight,
  ArrowUpRight,
  Star,
  Terminal,
  ShieldCheck,
  Instagram, Facebook
} from "lucide-react";
import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";

// --- Data ---

const services = [
  {
    id: "01",
    title: "Modern Web Development",
    description:
      "Custom-designed websites and web applications built to be fast, reliable, and future-ready. We focus on clean structure, smooth interactions, and scalability from day one.",
    tags: ["Custom","Responsive ", "Scalable"],
  },
  {
    id: "02",
    title: "Hosting and Deployment",
    description:
      "Reliable hosting setup and seamless deployment with security, stability, and uptime in mind. Your website goes live cleanly and stays running smoothly without headaches.",
    tags: ["Secure", "Reliable"],
  },
  {
    id: "03",
    title: "Performance and SEO",
    description:
      "Speed-focused optimization and search-ready structure to ensure your website loads instantly, ranks better, and delivers a smooth user experience across all devices.",
    tags: ["SEO", "UX"],
  },
];

const projects = [
  {
    id: 1,
    title: "Ceylon Wild Escapes",
    category: "Tourism Platform",
    tech: ["MERN STACK "],
    link: "https://www.ceylonwildescapes.com",
    image: "/p001.png", 
    year: "2025",
  },
  {
    id: 2,
    title: "Shey Collective",
    category: "Brand Portfolio",
    tech: ["MERN STACK"],
    link: "https://www.sheycollective.verecel.app",
    image: "/p3.png",
    year: "2024",
  },
];

const reviews = [
  {
    content:
      "Working with RuBion was straightforward and stress-free. They understood our requirements clearly and delivered exactly what we needed without unnecessary back and forth.",
    author: "Roshan Peiris",
    role: "Founder, Ceylon Wild Escapes",
  },
  {
    content:
      "The new website is noticeably faster and much easier for customers to use. We started getting better engagement within the first few weeks after launch.",
    author: "Himath De Soysa",
    role: "Founder, GoatCult",
  },
  {
    content:
      "What stood out was the attention to detail. From layout spacing to subtle animations, everything feels intentional and well thought out.",
    author: "Shehara Madurawala",
    role: "Founder, Shey Collective",
  },  
];

// --- Components ---

function SpotlightItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative group border border-zinc-800 bg-zinc-900/20 overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(163, 230, 53, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-lime-400 selection:text-black font-sans">
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[50] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- Hero Section (Flashlight Grid Effect) --- */}
      {/* --- Hero Section (Flashlight Grid Effect) --- */}
      <section 
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 group overflow-hidden"
      >
        {/* The Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* The Dynamic Mouse Follower Grid */}
        <motion.div
            className="absolute inset-0 bg-[linear-gradient(to_right,#a3e635_1px,transparent_1px),linear-gradient(to_bottom,#a3e635_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"
            style={{
              maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
              WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
            }}
        />

        {/* --- LEFT: Vertical Brand Spine (Desktop) --- */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden xl:flex fixed left-8 bottom-0 top-0 flex-col justify-center items-center gap-8 z-20 pointer-events-auto"
        >
            <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-zinc-400/50 to-transparent" />
            
            <div className="flex flex-col gap-6">
                <a href="https://instagram.com/rubion.dev" target="_blank" className="p-3 bg-zinc-900/50 border border-zinc-400/50 rounded-full text-zinc-400 hover:text-lime-400 hover:border-lime-400/50 transition-all duration-300 group">
                    <Instagram className="text-zinc-400/50 w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://facebook.com" target="_blank" className="p-3 bg-zinc-900/50 border border-zinc-400/50 rounded-full text-zinc-400 hover:text-lime-400 hover:border-lime-400/50 transition-all duration-300 group">
                    <Facebook className="text-zinc-400/50 w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
            </div>
            
            <div className="h-16 w-[1px] bg-zinc-400" />
            
            <div className="writing-vertical-rl ">
                <span className="text-xs font-mono tracking-[0.2em] text-zinc-400/50 hover:text-white transition-colors cursor-default">
                    @RUBION.DEV
                </span>
            </div>
            
            <div className="h-full w-[1px] bg-gradient-to-b from-zinc-400/50 to-transparent" />
        </motion.div>
        
        {/* --- CENTER: Main Content --- */}
        <div className="text-center max-w-4xl z-10 pointer-events-none relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/80 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-lime-400 mb-8 font-mono backdrop-blur-sm pointer-events-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.95]"
          >
            Your Trusted Partner <br />
            <span className="text-zinc-600">For Web Solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed pointer-events-auto"
          >
            We partner with forward-thinking companies to design and develop 
            web applications that leave a lasting impression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
          >
            {/* Primary Button: Portfolio */}
            <Link href="/portfolio">
                <button className="w-full sm:w-auto group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:bg-lime-400 hover:scale-105 active:scale-95">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Portfolio
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </button>
            </Link>

            {/* Secondary Button: Schedule Call 
            <Link href="/contact">
                <button className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full font-bold hover:border-lime-500/50 hover:text-lime-400 hover:bg-zinc-900/80 backdrop-blur-md transition-all active:scale-95">
                    <span className="relative z-10 flex items-center gap-2">
                        Reach Us
                    </span>
                    <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse group-hover:scale-125 transition-transform" />
                </button>
            </Link> */}
          </motion.div>

          {/* Mobile Only: Socials Bottom */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="xl:hidden flex items-center justify-center gap-6 mt-12 pointer-events-auto"
          >
             <a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors"><Instagram className="w-5 h-5" /></a>
             <span className="text-xs font-mono text-zinc-700">@rubion.dev</span>
             <a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors"><Facebook className="w-5 h-5" /></a>
          </motion.div>
        </div>
      </section>

      {/* --- Expertise --- */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-32 self-start">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Solutions <br/> We Provide.</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-sm">
              We don't just write code. We architect solutions that are secure, scalable, and built for the future.
            </p>
            <div className="hidden lg:block p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
               <div className="flex items-center gap-3 mb-4 text-white">
                 <ShieldCheck className="w-5 h-5 text-lime-400" />
                 <span className="font-mono text-sm">Delivery Standards</span>
               </div>
               <div className="flex flex-wrap gap-2">
                  {[
                    "100% Lighthouse Scores", 
                    "< 1s Load Time", 
                    "SEO Optimized", 
                    "Pixel Perfect",
                    "Mobile First",
                    "WCAG Accessible"
                  ].map(standard => (
                    <span key={standard} className="text-[10px] uppercase tracking-widest border border-zinc-700 bg-zinc-900/50 rounded px-3 py-1.5 text-zinc-400 font-mono hover:text-lime-400 hover:border-lime-400/30 transition-colors cursor-default">
                        {standard}
                    </span>
                  ))}
               </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {services.map((service) => (
              <SpotlightItem
                key={service.id}
                className="rounded-2xl p-8 hover:bg-zinc-900/40 transition-colors"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-lime-400 text-sm">{service.id}</span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex gap-3 pt-4 border-t border-white/5 mt-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs text-zinc-500 uppercase tracking-wider font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightItem>
            ))}
          </div>
        </div>
      </section>

      {/* --- Selected Work (Massive Typography Header) --- */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        
        {/* Updated Header Layout */}
        <div className="max-w-7xl mx-auto px-6 mb-24 flex flex-col md:flex-row justify-between items-end relative z-10">
             <div className="relative">
                 {/* Lime Glow behind text */}
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-lime-400/10 blur-[80px] rounded-full pointer-events-none" />
                 
                 <h2 className="text-6xl md:text-8xl font-bold text-white opacity-20 tracking-tighter select-none">SELECTED</h2>
                 <h2 className="text-6xl md:text-8xl font-bold text-white opacity-20 tracking-tighter -mt-4 md:-mt-8 ml-10 md:ml-20 select-none">WORKS</h2>
             </div>

             <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors border-b border-transparent hover:border-lime-400 pb-1 mb-4">
                Portfolio <MoveRight className="w-4 h-4" />
             </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link 
                href={project.link} 
                target="_blank"
                key={project.id}
                className="group block"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 z-20">
                     <span className="bg-zinc-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                       {project.category}
                     </span>
                  </div>
                </div>

                {/* Minimal Info */}
                <div className="flex justify-between items-start">
                   <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors mb-2 flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-lime-400" />
                      </h3>
                      <div className="flex gap-2">
                        {project.tech.map(t => (
                           <span key={t} className="text-xs text-zinc-500 font-mono">{t}</span>
                        ))}
                      </div>
                   </div>
                   <span className="text-zinc-600 font-mono text-sm pt-1">{project.year}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 md:hidden flex justify-center">
             <Link href="/portfolio" className="text-sm font-bold text-white border-b border-zinc-700 pb-1">
                View Entire Portfolio
             </Link>
          </div>
        </div>
      </section>

      {/* --- Client Feedback --- */}
      <section className="py-32 border-t border-white/5 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Client Feedback</h2>
              <p className="text-zinc-400 max-w-md">
                We pride ourselves on long-term partnerships. Here is what our collaborators have to say.
              </p>
            </div>
            <div className="flex gap-1 text-lime-400">
               {[...Array(5)].map((_, i) => <Star key={i} className="fill-lime-400 w-5 h-5" />)}
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="break-inside-avoid bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors"
              >
                <div className="mb-6">
                   <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                      <Star className="w-4 h-4" />
                   </div>
                </div>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-zinc-800/50">
                   <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">
                      {review.author.charAt(0)}
                   </div>
                   <div>
                       <h4 className="text-sm font-bold text-white">{review.author}</h4>
                       <p className="text-xs text-zinc-500">{review.role}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}