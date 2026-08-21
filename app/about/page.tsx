"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  Variants,
} from "framer-motion";
import {
  Code2,
  Zap,
  ArrowRight,
  Cpu,
  Layers,
  MessageCircle,
  LifeBuoy,
  CalendarCheck, // Added for the booking icon
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

// --- Data: Studio Principles ---
const principles = [
  {
    icon: Layers,
    title: "Modern Tech Stack",
    desc: "We use up-to-date, industry-proven tools and practices to ensure your website is reliable, secure, and ready to evolve as your business grows.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    desc: "Fast load times and smooth interactions are never an afterthought. Every decision is made to keep your website responsive and efficient.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "We write clear, structured, and maintainable code. This makes future updates easier, reduces bugs, and keeps long-term costs low.",
  },
  {
    icon: MessageCircle,
    title: "Honest Communication",
    desc: "No jargon, no false promises. We communicate clearly, set realistic expectations, and keep you informed at every stage of the project.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Support",
    desc: "Our work doesn’t end at launch. We provide ongoing support, updates, and guidance to ensure your website continues to perform over time.",
  },
];

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-lime-400 selection:text-black overflow-x-hidden py-50">
      {/* --- Global Grain Texture --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[50] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- Ambient Glow --- */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-lime-400 mb-8 font-mono">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            The Studio
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1]">
            We engineer <br />
            <span className="text-zinc-600">Digital Excellence.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl ">
              Rubion is more than a web agency. We are a technical partner for
              brands that refuse to compromise on quality.
              <br />
              We combine aesthetic minimalism with robust software engineering
              to build products that scale. We focus on clarity, performance,
              and long-term value. We partner with startups, entrepreneurs, and
              brands to design and develop websites that are built with purpose.
            </p>

            {/* Stats Micro-Grid */}
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="p-4 border border-zinc-800 bg-zinc-900/30 rounded-xl min-w-[140px]">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">
                  Uptime Focus
                </div>
              </div>
              <div className="p-4 border border-zinc-800 bg-zinc-900/30 rounded-xl min-w-[140px]">
                <div className="text-2xl font-bold text-white mb-1">0.1s</div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">
                  Latency Target
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- VISION / MANIFESTO --- */}
      <section className="relative z-10 border-y border-zinc-900 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              The philosophy is simple: <br />
              <span className="text-lime-400">No bloated code.</span>
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>
                The modern web has a weight problem. Too many sites are built on
                heavy templates that load slowly and break easily.
              </p>
              <p>
                We take a different approach. We write clean, semantic code from
                scratch. We optimize assets. We use edge caching. The result?
                Websites that feel instant and rank higher on search engines.
              </p>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center group">
            {/* Abstract Tech Visual */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative w-40 h-40">
              <div className="absolute inset-0 border border-lime-400/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-zinc-700 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="w-12 h-12 text-lime-400 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DNA / VALUES (Spotlight Grid) --- */}
      <section className="relative z-10 px-6 pt-32 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-2 text-lime-400 font-mono text-xs uppercase tracking-widest mb-4">
            <Cpu className="w-4 h-4" />
            Core Values
          </div>

          {/* UPDATED HEADER TEXT */}
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            Why Ru<span className="text-lime-400">B</span>ion?
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            In a digital landscape crowded with generic templates and quick
            fixes, we stand for precision. RuBion bridges the gap between
            creative ambition and technical reality, delivering software that is
            as robust as it is beautiful.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {principles.map((item, i) => (
            <PrincipleCard key={i} item={item} />
          ))}

          {/* --- NEW: Contact/Booking Card (Last Tile) --- */}
          <CtaCard />
        </motion.div>
      </section>
    </main>
  );
}

// --- Components ---

function PrincipleCard({ item }: { item: any }) {
  const { mouseX, mouseY, handleMouseMove } = useMousePosition();

  return (
    <motion.div
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      className="group relative h-full bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden"
    >
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

      <div className="relative z-20 p-8 h-full flex flex-col">
        <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
          <item.icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

// --- NEW: CTA Card Component ---
function CtaCard() {
  const { mouseX, mouseY, handleMouseMove } = useMousePosition();

  return (
    <motion.div
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      className="group relative h-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
             radial-gradient(
               500px circle at ${mouseX}px ${mouseY}px,
               rgba(163, 230, 53, 0.15),
               transparent 80%
             )
           `,
        }}
      />

      <div className="relative z-20 p-8 h-full flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 bg-lime-400 border border-lime-300 rounded-xl flex items-center justify-center text-zinc-950 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(163,230,53,0.3)]">
            <CalendarCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready for a project?
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            Skip the guesswork. Let's discuss your requirements and build
            something exceptional.
          </p>
        </div>

        <a
          href="/contact"
          className="w-full inline-flex justify-center items-center gap-2 py-4 rounded-xl bg-zinc-800 hover:bg-lime-400 hover:text-zinc-950 text-white font-bold transition-all duration-300 border border-zinc-700 hover:border-lime-400 group/btn"
        >
          Book a Session
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
