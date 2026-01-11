"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUp, 
  Instagram, 
  Github, 
  Linkedin, 
  Twitter, 
  Copy, 
  Check, 
  Globe 
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  // --- 1. Real-time Clock (Sri Lanka Time) ---
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Colombo", // Set to your location
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // --- 2. Scroll to Top ---
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- 3. Copy Email Logic ---
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("binukhe@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative bg-zinc-950 text-white pt-32 pb-10 overflow-hidden font-sans">
      
      {/* --- Global Grain Texture --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[0] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- Ambient Glow --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        

        {/* --- Middle Section: Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-zinc-800 mb-24">
          
          {/* SITEMAP */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Sitemap</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-zinc-400">
              {['Home', 'Work', 'Services', 'About'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-lime-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Socials</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-zinc-400">
              {[
                { name: 'Instagram', icon: Instagram, href: '#' },
                { name: 'LinkedIn', icon: Linkedin, href: '#' },
                { name: 'GitHub', icon: Github, href: '#' },
                { name: 'Twitter', icon: Twitter, href: '#' },
              ].map((social) => (
                <li key={social.name}>
                  <a href={social.href} className="flex items-center gap-2 hover:text-white transition-colors">
                    <social.icon className="w-4 h-4" /> {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATION & TIME */}
          <div className="flex flex-col gap-6">
             <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Location</h4>
             <div className="flex flex-col gap-1 text-sm text-zinc-400">
                <p className="text-white font-medium">Colombo, Sri Lanka</p>
                <div className="flex items-center gap-2 mt-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full w-fit">
                    <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse" />
                    <span className="font-mono text-xs">{time}</span>
                </div>
             </div>
          </div>

          {/* LEGAL */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-zinc-400">
               <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>

        </div>

        {/* --- Bottom: Massive Brand Text --- */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col items-center">
            <div className="flex justify-between w-full text-[10px] uppercase tracking-widest text-zinc-600 mb-4 font-mono">
                <span>© {new Date().getFullYear()} Rubion.dev</span>
                <span>All Rights Reserved</span>
            </div>
            
            <h1 className="text-[15vw] leading-[0.8] font-bold text-zinc-900 select-none tracking-tighter mix-blend-difference pointer-events-none">
                RUBION
            </h1>
        </div>

      </div>
    </footer>
  );
}