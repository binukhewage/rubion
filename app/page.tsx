"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Atom, 
  Code2, 
  Layers, 
  MoveRight, 
  Twitter, 
  Instagram, 
  Facebook, 
  Phone,
  ArrowUpRight,
  Globe,
  ShoppingCart,
  Settings,
  Star,
  Quote,
  ChevronDown,
  ChevronUp,
  Mail,
  Check,
  Send,
  Heart,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// --- Data: Skills ---
const services = [
  {
    id: 1,
    icon: Globe,
    title: "Modern Website Development",
    desc: "We design and develop fast, responsive, and SEO-friendly websites built for performance and scalability.",
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "We build secure, scalable e-commerce platforms that deliver seamless shopping experiences and drive sales.",
  },
  {
    id: 3,
    icon: Settings,
    title: "Custom Web Applications",
    desc: "We create tailored web applications designed to streamline workflows and meet unique business needs.",
  },
];

// --- Data: Recent Projects ---
const projects = [
  {
    id: 1,
    title: "Ceylon Wild Escapes",
    category: "Web Development",
    description:
      "Ceylon Wild Escapes is a modern, responsive wildlife tourism website built with performance, accessibility, and scalability in mind.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://example.com/project-1",
    accentColor: "bg-lime-400",
    image: "/p1.png", 
  },
  {
    id: 2,
    title: "GOAT CULT",
    category: "E-Commerce",
    description:
      "G.O.A.T CULT is a scalable e-commerce buying and selling platform. The system supports product listings and user accounts.",
    tech: ["React", "Node.js"],
    link: "https://www.goatcult.lk",
    accentColor: "bg-cyan-400",
    image: "/p2.png", 
  },
];

// --- Data: Client Reviews ---
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    content: "Working with rubion.dev transformed our online presence. Their attention to detail and technical expertise is unmatched.",
    rating: 5,
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GreenEats",
    content: "The e-commerce platform they built increased our sales by 300%. Exceptional service from start to finish.",
    rating: 5,
    avatar: "/avatar2.jpg",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Marketing Director, Bloom",
    content: "Professional, creative, and always on time. Our website loads faster than any competitor in our industry.",
    rating: 5,
    avatar: "/avatar3.jpg",
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO, FlowFinance",
    content: "The custom web application streamlined our entire workflow. The team understood our needs perfectly.",
    rating: 5,
    avatar: "/avatar4.jpg",
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    role: "Owner, UrbanBrew",
    content: "From concept to launch, the process was smooth and transparent. Highly recommended!",
    rating: 5,
    avatar: "/avatar5.jpg",
  },
];

// --- Data: FAQ ---
const faqs = [
  {
    id: 1,
    question: "How long does a typical web project take?",
    answer: "Project timelines vary based on complexity. A standard website takes 4-6 weeks, while e-commerce platforms typically require 8-12 weeks. We provide detailed timelines during our initial consultation."
  },
  {
    id: 2,
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer various support packages including security updates, performance monitoring, content updates, and technical support. We ensure your website remains secure and up-to-date."
  },
  {
    id: 3,
    question: "What's included in your development process?",
    answer: "Our process includes discovery & strategy, design & prototyping, development, quality assurance, launch, and post-launch support. We maintain transparent communication throughout."
  },
  {
    id: 4,
    question: "Can you work with our existing design or brand?",
    answer: "Absolutely! We can work with your existing brand guidelines or create new designs from scratch. We're flexible and adapt to your specific needs."
  },
  {
    id: 5,
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies including Next.js, React, TypeScript, Tailwind CSS, Node.js, and various headless CMS platforms like Sanity and Contentful."
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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const reviewsContainerRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // In a real app, you would send this to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-lime-300 selection:text-black overflow-x-hidden">
      
      {/* --- Background Gradient Mesh --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-lime-300/40 rounded-full blur-[100px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-green-200/40 rounded-full blur-[100px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-lime-100/60 rounded-full blur-[120px] mix-blend-multiply" 
        />
      </div>

      {/* --- Hero Section --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="flex flex-col md:flex-row">
          
          {/* Social Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:flex flex-col gap-6 items-center justify-center mr-12 mt-12"
          >
            <div className="h-20 w-[1px] bg-zinc-300"></div>
            {[Twitter, Instagram, Facebook].map((Icon, i) => (
              <motion.a 
                key={i} 
                whileHover={{ scale: 1.2, rotate: 10 }}
                href="#" 
                className="p-2 bg-zinc-100 rounded-full hover:bg-lime-300 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
            <div className="text-xs font-mono rotate-180 text-zinc-400" style={{ writingMode: 'vertical-rl' }}>@rubion.dev</div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="flex-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
              Trusted <span className="bg-zinc-900 text-white px-4 rounded-xl inline-block transform -rotate-2">Partner</span> for <br />
              Your Website <span className="bg-zinc-900 text-white px-4 rounded-xl inline-block transform rotate-1">Develop.</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-12">
              <div className="max-w-md text-lg text-zinc-600 font-medium">
                Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 border border-zinc-300 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full hover:border-black transition-colors"
              >
                <div className="bg-zinc-900 text-white p-2 rounded-full">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold">Schedule a Call</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section className="relative z-10 px-4 md:px-6 mb-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="bg-zinc-950 text-white rounded-[2.5rem] p-8 md:p-16 max-w-7xl mx-auto shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zinc-800/30 rounded-full blur-[100px]" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative">
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 border border-zinc-700 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-4">
                <ArrowRight className="w-3 h-3 rotate-45" /> Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Solutions <br /> <span className="ml-3">We Provide.</span>
              </h2>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="hidden md:flex gap-4">
              <button className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors"><MoveRight className="w-5 h-5 rotate-180" /></button>
              <button className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors"><MoveRight className="w-5 h-5" /></button>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer} 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
             {services.map((service) => {
               const Icon = service.icon;
               return (
                 <SkillCard
                   key={service.id}
                   icon={<Icon className="w-8 h-8 text-lime-400" />}
                   title={service.title}
                   desc={service.desc}
                 />
               );
             })}
          </motion.div>
        </motion.div>
      </section>

      {/* --- Experience/Brands Section --- */}
      <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto text-center">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
         >
            <div className="inline-block border border-zinc-200 bg-white/50 px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
              OUR WORK
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              We Build <span className="">Reliable</span> <br />
              <span className="bg-zinc-900 text-white px-2 rounded-lg">Digital Solutions</span> For Growing Brands
            </h2>
            
            <p className="max-w-2xl mx-auto text-zinc-600 text-lg mb-12">
              From concept to launch, we build scalable digital solutions that help businesses grow with confidence in the digital space.
            </p>
         </motion.div>
      </section>

      {/* --- Recent Work Section --- */}
      <section className="relative z-10 px-4 md:px-6 pb-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-zinc-950 text-white rounded-[2.5rem] p-8 md:p-16 max-w-7xl mx-auto relative overflow-hidden"
        >
          {/* Green Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-900/20 rounded-full blur-[120px]" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 border border-zinc-700 px-3 py-1 rounded-full text-xs uppercase mb-4">
                <ArrowRight className="w-3 h-3 -rotate-45 text-lime-400" /> Work Process
              </div>
              <h3 className="text-3xl md:text-5xl font-bold">
                Take A Look At The <br />Latest Projects.
              </h3>
            </div>
            
            <a href="/portfolio" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-lime-400 transition-colors mt-6 md:mt-0">
              View All Work <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
          >
            {projects.map((project) => (
              <RecentProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
          
          <div className="mt-8 flex md:hidden justify-center">
            <a href="/portfolio" className="flex items-center gap-2 text-sm font-medium hover:text-lime-400 transition-colors">
               View All Work <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- Client Reviews Section (Moving Carousel) --- */}
      {/* --- REVIEWS SECTION --- */}
      <section className="relative z-10 px-4 md:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          
          {/* --- HEADER (Outside the Box) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center gap-2 border border-zinc-200 bg-zinc-50 px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
              <MessageCircle className="w-3 h-3" /> Clients Testimonials
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900">
              Trusted by <span className="bg-zinc-900 text-white px-4 rounded-xl transform -rotate-1 inline-block">Businesses</span> Worldwide
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Trusted by innovative companies worldwide. Here's what they have to say about working with us.
            </p>
          </motion.div>

          {/* --- BENTO BOX (Testimonials & Stats Only) --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-zinc-950 text-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden"
          >
            {/* Lime Glow Effect */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-900/20 rounded-full blur-[120px]" />

            {/* Moving Reviews Carousel */}
            <div className="relative overflow-hidden py-10 z-10">
              {/* Gradient Masks for smooth fade */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20" />

              <motion.div 
                className="flex gap-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 40, 
                  ease: "linear", 
                  repeat: Infinity 
                }}
                style={{ width: "max-content" }}
              >
                {/* Double the array for seamless looping */}
                {[...reviews, ...reviews].map((review, index) => (
                  <div
                    key={`${review.id}-${index}`}
                    className="flex-shrink-0 w-[380px] bg-zinc-900/50 border border-zinc-800 rounded-[2rem] p-8 transition-colors hover:border-zinc-700 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />
                      ))}
                    </div>
                    
                    <p className="text-zinc-300 mb-8 text-lg leading-relaxed">
                      "{review.content}"
                    </p>
                    
                    <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/50">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{review.name}</h4>
                        <p className="text-xs text-zinc-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Stats (Inside Box) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-zinc-800/50 relative z-10">
              {[
                { value: "99%", label: "Client Satisfaction" },
                { value: "200+", label: "Projects Completed" },
                { value: "50+", label: "Happy Clients" },
                { value: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      

      {/* --- Newsletter Section --- */}
      <section className="relative z-10 px-4 md:px-6 p-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center border border-zinc-300 rounded-3xl p-12  backdrop-blur-lg shadow-2xl relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 border border-zinc-200 bg-white/50 px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
            <Mail className="w-3 h-3" /> Stay Updated
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Join Our <span className="bg-zinc-900 text-white px-4 rounded-xl">Newsletter</span>
          </h2>
          
          <p className="text-zinc-600 text-lg mb-12 max-w-2xl mx-auto">
            Get the latest web development insights, tips, and exclusive offers delivered to your inbox.
          </p>

          {isSubscribed ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-3 bg-lime-50 border border-lime-200 px-8 py-6 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center">
                <Check className="w-6 h-6 text-lime-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-zinc-900">Successfully Subscribed!</div>
                <div className="text-sm text-zinc-600">Thank you for joining our newsletter.</div>
              </div>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubscribe}
              className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-zinc-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors"
              >
                Subscribe <Send className="w-4 h-4" />
              </motion.button>
            </motion.form>
          )}

          <p className="text-sm text-zinc-500 mt-6">
            No spam ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </section>
    </main>
  );
}

// --- Components ---

function SkillCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-800 transition-colors group"
    >
      <div className="mb-6 bg-zinc-950 w-16 h-16 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-lime-500/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function RecentProjectCard({ project }: { project: any }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className="group rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-zinc-950">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content Container */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
           <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
             {project.category}
           </span>
           <div className="flex gap-2">
             {project.tech.map((t: string) => (
               <span key={t} className="text-[10px] px-2 py-1 rounded border border-zinc-700 text-zinc-400">
                 {t}
               </span>
             ))}
           </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 group-hover:text-lime-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        <a 
          href={project.link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:translate-x-2 transition-transform duration-300"
        >
          Live Site <ArrowUpRight className="w-4 h-4 text-lime-400" />
        </a>
      </div>
    </motion.div>
  );
}