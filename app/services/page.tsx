"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  ShoppingCart, 
  Cloud, 
  LifeBuoy, 
  Zap, 
  Database,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

// --- Service Data ---
const services = [
  {
    id: 1,
    icon: Code2,
    title: "Website Development",
    desc: "Custom-coded, high-performance websites built with modern technologies like Next.js and React. We focus on semantic markup, accessibility, and pixel-perfect implementation.",
    features: ["Custom Frontend Architecture", "Responsive Design", "Interactive UI/UX"]
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Scalable online stores designed to convert. From custom Shopify themes to headless commerce solutions, we build platforms that drive sales and manage inventory seamlessly.",
    features: ["Payment Gateway Integration", "Inventory Management", "Secure Checkout"]
  },
  {
    id: 3,
    icon: Cloud,
    title: "Hosting & Deployment",
    desc: "Forget the technical headaches. We handle domain setup, SSL certification, and deployment to high-speed CDNs like Vercel or Netlify to ensure 99.9% uptime.",
    features: ["SSL Certification", "CDN Configuration", "Automated Backups"]
  },
  {
    id: 4,
    icon: LifeBuoy,
    title: "Maintenance & Support",
    desc: "Your website needs to evolve. We provide ongoing support, bug fixes, content updates, and security patches to keep your digital presence running smoothly.",
    features: ["24/7 Monitoring", "Security Patches", "Content Updates"]
  },
  {
    id: 5,
    icon: Zap,
    title: "Performance & SEO",
    desc: "Speed matters. We optimize your site's core web vitals and structure your content for search engines, helping you rank higher and retain more visitors.",
    features: ["Core Web Vitals Optimization", "Technical SEO", "Speed Audits"]
  },
  {
    id: 6,
    icon: Database,
    title: "CMS Integration",
    desc: "Empower your team to manage content easily. We integrate user-friendly Content Management Systems like Sanity, Strapi, or Contentful tailored to your workflow.",
    features: ["Headless CMS", "Custom Content Models", "User Training"]
  }
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-lime-300 selection:text-black overflow-x-hidden">
      
      {/* --- Background Gradient Mesh --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[20%] w-[40vw] h-[40vw] bg-lime-300/30 rounded-full blur-[100px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[10%] w-[50vw] h-[50vw] bg-green-200/40 rounded-full blur-[120px] mix-blend-multiply" 
        />
      </div>

      

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24">
        
        {/* --- Header --- */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-20 md:mb-24 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 border border-zinc-200 bg-white/50 px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
             Our Expertise
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
            Expert <span className="bg-zinc-900 text-white px-4 rounded-xl inline-block transform -rotate-1">Services</span> <br />
            That Drive Growth.
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl">
            We don't just build websites; we build comprehensive digital solutions tailored to your business goals.
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

        {/* --- Bottom CTA --- */}
        

      </section>
    </main>
  );
}

// --- Component: Service Card ---

function ServiceCard({ service }: { service: any }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="group bg-zinc-950 text-white p-8 rounded-[2rem] border border-zinc-800 hover:border-lime-500/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="w-14 h-14 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 group-hover:border-lime-500/30">
          <service.icon className="w-7 h-7 text-lime-400" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 group-hover:text-lime-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
          {service.desc}
        </p>

        {/* Feature List */}
        <ul className="space-y-3 pt-6 border-t border-zinc-900">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center gap-2 text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}