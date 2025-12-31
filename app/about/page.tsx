"use client";

import { motion, Variants } from "framer-motion";
import {
  Code2,
  Rocket,
  ShieldCheck,
  Users,
  Zap,
  Layout,
  ArrowRight,
  Target,
  Search,
  PenTool,
  Cpu,
} from "lucide-react";

// --- Animation Variants ---
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

export default function About() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-lime-300 selection:text-black overflow-x-hidden py-40">
      {/* --- Background Gradient Mesh --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] bg-lime-300/30 rounded-full blur-[100px] mix-blend-multiply"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-green-200/40 rounded-full blur-[120px] mix-blend-multiply"
        />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 md:pt-20 md:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 border border-zinc-200 bg-white/50 px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-8">
            Who We Are
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
            Crafted for <br />
            <span className="bg-zinc-900 text-white px-4 rounded-xl inline-block transform -rotate-1">
              Growth & Scale.
            </span>
          </h1>

          <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">
            Rubion is a modern web development studio focused on clarity,
            performance, and long-term value. We partner with startups,
            entrepreneurs, and brands to design and develop websites that are
            built with purpose.
          </p>
        </motion.div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="relative z-10 px-6 py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              More than just <br /> good design.
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                At Rubion, we believe great websites should load fast, work
                flawlessly across devices, and support real business goals.
              </p>
              <p>
                That’s why every project we take on is crafted using modern
                technologies, clean architecture, and a performance-first
                mindset. From the first idea to final launch, we focus on what
                truly matters to your growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-zinc-100"
          >
            <h3 className="text-xl font-bold mb-6 border-b border-zinc-100 pb-4">
              What We Do
            </h3>
            <ul className="space-y-4">
              {[
                "Modern Website Development",
                "E-commerce Solutions",
                "Custom Web Applications",
                "Hosting, Deployment & Support",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-medium text-zinc-700"
                >
                  <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-600">
                    <Layout className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- HOW WE WORK (Process) --- */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">How We Work</h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Our process is simple and transparent. We communicate clearly,
            deliver on time, and treat every project as a long-term partnership.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <ProcessStep
            num="01"
            icon={Search}
            title="Understand"
            desc="We take time to learn about your business, users, and specific goals."
          />
          <ProcessStep
            num="02"
            icon={PenTool}
            title="Design"
            desc="We create clean, user-focused interfaces designed with purpose."
          />
          <ProcessStep
            num="03"
            icon={Code2}
            title="Build"
            desc="We develop using modern tech for fast, secure, and scalable results."
          />
          <ProcessStep
            num="04"
            icon={Rocket}
            title="Launch"
            desc="Smooth deployment followed by ongoing support and maintenance."
          />
        </motion.div>
      </section>

      {/* --- WHY RUBION (Dark Bento Section) --- */}
      <section className="relative z-10 px-4 md:px-6 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-zinc-950 text-white rounded-[2.5rem] p-8 md:p-16 max-w-7xl mx-auto relative overflow-hidden"
        >
          {/* Lime Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-900/20 rounded-full blur-[120px]" />

          <div className="relative z-10 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Rubion?</h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              We don’t believe in one-size-fits-all solutions. Every project is
              tailored to fit your brand, goals, and future growth.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          >
            <FeatureCard
              icon={Cpu}
              title="Modern Tech Stack"
              desc="Next.js, React, Tailwind, & Node.js."
            />
            <FeatureCard
              icon={Zap}
              title="Performance Focused"
              desc=" optimized for speed and SEO."
            />
            <FeatureCard
              icon={Code2}
              title="Clean Code"
              desc="Scalable architecture built to last."
            />
            <FeatureCard
              icon={Users}
              title="Honest Comms"
              desc="Transparent updates, no jargon."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Long-term Support"
              desc="We are partners, not just vendors."
            />
            <div className="bg-lime-400 text-zinc-950 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
              <p className="text-sm mb-6 opacity-80">
                Let's build something great.
              </p>
              <a
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-zinc-800 transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- MISSION STATEMENT --- */}
      <section className="relative z-10 px-6 py-20 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block border border-zinc-200 px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6 bg-white">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            "To help businesses grow online by building reliable, high-quality
            web solutions that deliver real results."
          </h2>
        </motion.div>
      </section>
    </main>
  );
}

// --- Helper Components ---

function ProcessStep({ num, icon: Icon, title, desc }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white border border-zinc-200 p-8 rounded-3xl hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:bg-lime-100 group-hover:text-lime-700 transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-4xl font-bold text-zinc-100 group-hover:text-zinc-200 transition-colors">
          {num}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-600 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors"
    >
      <Icon className="w-8 h-8 text-lime-400 mb-6" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm">{desc}</p>
    </motion.div>
  );
}
