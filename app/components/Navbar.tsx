"use client";

import { useState } from "react"; // 1. Import useState
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // 2. Import 'X' for close icon

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  // 3. State to manage menu visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="relative w-full max-w-5xl flex items-center justify-between p-2 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[25px] shadow-2xl ring-1 ring-white/5">
        
        {/* --- LEFT: LOGO --- */}
        <div className="pl-4">
          <Link href="/" className="font-bold text-lg tracking-tight text-white hover:opacity-80 transition-opacity">
            RUBION.
          </Link>
        </div>

        {/* --- MIDDLE: LINKS (Desktop) --- */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-800/50 rounded-[25px] p-1 border border-white/5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium rounded-[25px] transition-all duration-300 ease-out ${
                  isActive
                    ? "bg-zinc-100 text-zinc-900 shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* --- RIGHT: CTA & Mobile Toggle --- */}
        <div className="flex items-center pr-1 gap-2">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-zinc-900 bg-white rounded-md hover:bg-lime-400 transition-colors duration-300"
          >
            Start Project
          </Link>

          {/* 4. Mobile Menu Button with Toggle Logic */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-white bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* --- 5. MOBILE MENU DROPDOWN --- */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-4 bg-zinc-900 border border-white/10 rounded-2xl shadow-xl flex flex-col gap-2 md:hidden">
            {navLinks.map((link) => {
               const isActive = pathname === link.href;
               return (
                <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Close menu on click
                    className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                        ? "bg-zinc-800 text-white" 
                        : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
                    }`}
                >
                    {link.name}
                </Link>
               )
            })}
            
            {/* Mobile CTA */}
            <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 block w-full text-center px-6 py-3 text-sm font-bold text-zinc-900 bg-white rounded-xl hover:bg-lime-400 transition-colors"
            >
               Start Project
            </Link>
          </div>
        )}

      </nav>
    </div>
  );
}