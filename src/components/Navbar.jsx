import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
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
        <a href="#home" className="hover:text-cyan-400">
          Home
        </a>
        <a href="#about" className="hover:text-cyan-400">
          About
        </a>
        <a href="#projects" className="hover:text-cyan-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-cyan-400">
          Contact
        </a>
      </motion.div>
    </nav>
  );
}