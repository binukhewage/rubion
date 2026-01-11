"use client";

import { motion, useMotionTemplate, useMotionValue, Variants } from "framer-motion";
import { 
  Code2, 
  ShoppingCart, 
  Cloud, 
  LifeBuoy, 
  Zap, 
  Database,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Cpu,
  Search,Rocket, PenTool, GitMerge
} from "lucide-react";
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

// --- Service Data ---
const services = [
  {
    id: "01",
    icon: Code2,
    title: "Website Development",
    desc: "Custom-coded, high-performance websites built with modern technologies like Next.js and React. We focus on semantic markup, accessibility, and pixel-perfect implementation.",
    features: ["Custom Frontend Architecture", "Responsive Design", "Interactive UI/UX"]
  },
  {
    id: "02",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Scalable online stores designed to convert. From custom Shopify themes to headless commerce solutions, we build platforms that drive sales and manage inventory seamlessly.",
    features: ["Payment Gateway Integration", "Inventory Management", "Secure Checkout"]
  },
  {
    id: "03",
    icon: Cloud,
    title: "Hosting & Deployment",
    desc: "Forget the technical headaches. We handle domain setup, SSL certification, and deployment to high-speed CDNs and ensure 100% uptime.",
    features: ["SSL Certification", "CDN Configuration", "Automated Backups"]
  },
  {
    id: "04",
    icon: LifeBuoy,
    title: "Maintenance & Support",
    desc: "Your website needs to evolve. We provide ongoing support, bug fixes, content updates, and security patches to keep your digital presence running smoothly.",
    features: ["24/7 Monitoring", "Security Patches", "Content Updates"]
  },
  {
    id: "05",
    icon: Zap,
    title: "Performance & SEO",
    desc: "Speed matters. We optimize your site's core web vitals and structure your content for search engines, helping you rank higher and retain more visitors.",
    features: ["Core Web Vitals Optimization", "Technical SEO", "Speed Audits"]
  },
  {
    id: "06",
    icon: Database,
    title: "CMS Integration",
    desc: "Empower your team to manage content easily. We integrate user-friendly Content Management Systems like Sanity, Strapi, or Contentful tailored to your workflow.",
    features: ["Headless CMS", "Custom Content Models", "User Training"]
  }
];

const process = [
  { 
    id: "01", 
    title: "Discovery & Strategy", 
    desc: "We analyze your requirements, audit existing tech, and define the architectural roadmap.",
    icon: Search,
    duration: "1-2 Weeks"
  },
  { 
    id: "02", 
    title: "Design & Architect", 
    desc: "We design the UI/UX and plan the database schema, API routes, and component hierarchy.",
    icon: PenTool,
    duration: "2-3 Weeks"
  },
  { 
    id: "03", 
    title: "Agile Development", 
    desc: "Iterative sprints. You get weekly builds to test. We focus on clean, type-safe code.",
    icon: GitMerge,
    duration: "4-8 Weeks"
  },
  { 
    id: "04", 
    title: "QA & Deployment", 
    desc: "Rigorous testing (E2E, Unit), performance auditing, and zero-downtime deployment.",
    icon: Rocket,
    duration: "1 Week"
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

export default function Services() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-lime-400 selection:text-black overflow-x-hidden py-50">
      
      {/* --- Global Grain Texture --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[50] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- Ambient Glow --- */}
      <div className="fixed top-20 right-0 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-24 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-lime-400 mb-6 font-mono">
             <Terminal className="w-3 h-3" />
             Our Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
            Technical Services <br />
            <span className="text-zinc-600">For Modern Brands.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We don't just build websites; we engineer robust digital ecosystems designed for scale, performance, and long-term growth.
          </p>
        </motion.div>

        {/* --- Services Grid --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}

// --- Component: Service Card (Spotlight) ---

function ServiceCard({ service }: { service: any }) {
  const { mouseX, mouseY, handleMouseMove } = useMousePosition();

  return (
    <motion.div 
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      className="group relative h-full bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden"
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(163, 230, 53, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-20 p-8 flex flex-col h-full">
        {/* Header: Icon & ID */}
        <div className="flex justify-between items-start mb-8">
            <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center text-lime-400 group-hover:scale-110 transition-transform duration-300 shadow-lg">
               <service.icon className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs text-zinc-600 group-hover:text-lime-400/50 transition-colors">{service.id}</span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
          {service.desc}
        </p>

        {/* Feature List */}
        <div className="pt-6 border-t border-zinc-800/50 mt-auto">
           <ul className="space-y-3">
             {service.features.map((feature: string, i: number) => (
               <li key={i} className="flex items-center gap-3 text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                 <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-lime-400 transition-colors" />
                 {feature}
               </li>
             ))}
           </ul>
        </div>
      </div>
    </motion.div>
  )
}