"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="relative flex items-center justify-between gap-12 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-full px-2 py-2 pr-2 pl-6 shadow-2xl">
          {/* --- LEFT: LOGO (RuBion) --- */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/RubionWeb.png"
                alt="Rubion logo"
                width={512}
                height={512}
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* --- MIDDLE: LINKS --- */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium transition-colors ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* --- RIGHT: CTA BUTTON --- */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-1 bg-lime-400 text-zinc-950 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wide hover:bg-lime-300 transition-colors"
            >
              Start <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-zinc-800 transition-colors"
            >
              {isOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* --- MOBILE MENU (Simple Fade) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-4 shadow-2xl">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="mt-2 flex items-center justify-center gap-2 w-full bg-lime-400 text-zinc-950 py-3 rounded-xl text-xs font-bold uppercase hover:bg-lime-300 transition-colors"
                >
                  Start Project <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
