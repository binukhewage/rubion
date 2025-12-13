"use client";

import { motion } from "framer-motion";
import { ArrowUp, Twitter, Instagram, Facebook, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-8 overflow-hidden relative">
      
      {/* --- Background Glows --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-lime-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">Rubion.dev</h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
                Crafting digital experiences that merge art with functionality. Let's build something memorable together.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">Sitemap</h4>
            <ul className="flex flex-col gap-4 text-zinc-300 font-medium">
              <li><a href="/" className="hover:text-lime-400 transition-colors">Home</a></li>
              <li><a href="/portfolio" className="hover:text-lime-400 transition-colors">Portfolio</a></li>
              <li><a href="/services" className="hover:text-lime-400 transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-lime-400 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-lime-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">Socials</h4>
            <ul className="flex flex-col gap-4 text-zinc-300 font-medium">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-lime-400 transition-colors group">
                  <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-lime-400 transition-colors group">
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-lime-400 transition-colors group">
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-lime-400 transition-colors group">
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> Github
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Back to Top */}
          <div className="md:col-span-1 flex md:justify-end items-start">
             <button 
               onClick={scrollToTop}
               className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all group"
             >
               <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-zinc-800 mb-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500 font-medium">
          <div>
            &copy; {new Date().getFullYear()} Rubion. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Big Text Effect at very bottom */}
        <div className="mt-20 select-none pointer-events-none opacity-20">
           <h1 className="text-[12vw] md:text-[14vw] font-black uppercase leading-none text-center text-zinc-800 tracking-tighter">
             Rubion
           </h1>
        </div>

      </div>
    </footer>
  )
}