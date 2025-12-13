"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Twitter, 
  Instagram, 
  Facebook, 
  Send
} from "lucide-react";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-lime-300 selection:text-black overflow-x-hidden">
      
      {/* --- Background Gradient Mesh --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-lime-300/40 rounded-full blur-[100px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-green-200/40 rounded-full blur-[100px] mix-blend-multiply" 
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
            Let's Start a <br />
            <span className="bg-zinc-900 text-white px-4 rounded-xl inline-block transform -rotate-2">Project</span> Together.
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl">
            Have an idea? I can help you bring it to life. Send me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          
          {/* Left: Contact Info Card (Dark) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-950 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[500px]"
          >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-zinc-800/30 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 border border-zinc-700 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-8">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" /> Available for work
              </div>
              
              <h3 className="text-3xl font-bold mb-12">Get In Touch</h3>
              
              <div className="space-y-8">
                <ContactItem icon={<Mail className="w-6 h-6 text-lime-400" />} label="Email Us" value="hello@rubion.dev" />
                <ContactItem icon={<Phone className="w-6 h-6 text-lime-400" />} label="Call Us" value="+1 (555) 000-0000" />
                <ContactItem icon={<MapPin className="w-6 h-6 text-lime-400" />} label="Location" value="Colombo, Sri Lanka" />
              </div>
            </div>

            {/* Socials at bottom */}
            <div className="relative z-10 mt-12 pt-12 border-t border-zinc-800">
               <h4 className="text-sm text-zinc-400 uppercase tracking-wider mb-4">Follow US on </h4>
               <div className="flex gap-4">
                  {[Twitter, Instagram, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6 p-4 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="First Name" placeholder="John" />
              <InputGroup label="Last Name" placeholder="Doe" />
            </div>
            
            <InputGroup label="Email Address" placeholder="john@example.com" type="email" />
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Service Interest</label>
              <select className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-4 outline-none focus:border-black transition-colors rounded-lg">
                <option>Web Development</option>
                <option>Custom Web Solutions</option>
                <option>E - Commerce Solutions</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Message</label>
              <textarea 
                rows={4} 
                placeholder="Tell me about your project..."
                className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-4 outline-none focus:border-black transition-colors resize-none rounded-t-lg"
              />
            </div>

            <button className="mt-4 bg-zinc-900 text-white rounded-full py-4 px-8 font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all group">
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>

        </div>
      </section>
    </main>
  );
}

// --- Sub Components ---

function ContactItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">{label}</div>
        <div className="font-semibold text-lg">{value}</div>
      </div>
    </div>
  )
}

function InputGroup({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold uppercase tracking-wider text-zinc-500">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-4 outline-none focus:border-black transition-colors rounded-t-lg"
      />
    </div>
  )
}