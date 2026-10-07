import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6"
    >
      <motion.h1
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold"
      >
        My<span className="text-cyan-400">Portfolio</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden gap-8 text-sm text-slate-300 md:flex"
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} className="hover:text-cyan-400">
            {label}
          </a>
        ))}
      </motion.div>

      <button
        type="button"
        className="rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-cyan-400 md:hidden"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-6 right-6 top-full flex flex-col gap-1 rounded-2xl border border-white/10 bg-neutral-900 p-3 text-sm text-slate-300 shadow-xl md:hidden"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl px-4 py-3 hover:bg-white/5 hover:text-cyan-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}