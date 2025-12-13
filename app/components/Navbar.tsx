"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants for the mobile menu
const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: "-100%",
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};


  const linkVariants: Variants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.4,
    },
  }),
};

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="font-bold text-xl tracking-tighter uppercase cursor-pointer z-50 relative">
          RUBION.DEV
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 uppercase">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-black transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        {/* Changed from <button> to <a> for semantic correctness */}
        <a 
          href="/contact"
          className="hidden md:flex items-center gap-2 border border-zinc-900 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ease-out hover:bg-zinc-900 hover:text-white hover:ring-2 hover:ring-zinc-900 hover:ring-offset-2 group"
        >
          <span>Start Project</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu} 
          className="flex md:hidden relative z-50 p-2 -mr-2 text-zinc-900"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center md:hidden overflow-hidden"
          >
            {/* Background Mesh (Matches your page design) */}
            <div className="absolute inset-0 pointer-events-none opacity-50">
               <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-lime-300/30 rounded-full blur-[100px] mix-blend-multiply" />
               <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-green-200/40 rounded-full blur-[100px] mix-blend-multiply" />
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-8 text-center relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="text-4xl font-bold tracking-tight text-zinc-900 hover:text-lime-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Mobile CTA */}
              <motion.div 
                custom={navLinks.length}
                variants={linkVariants}
                className="mt-8"
              >
                <a 
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white rounded-full px-8 py-4 text-lg font-semibold"
                >
                  Start Project <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}