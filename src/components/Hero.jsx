import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import profilePic from "../assets/dp.jpg";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
          <Sparkles size={16} className="text-cyan-400" />
          Available for full-time work
        </div>

        <h2 className="text-5xl font-black leading-tight md:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Larry Cruz
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          I am a frontend developer with a passion for web and graphic design,
          creating clean, responsive, and user-friendly digital experiences. I
          am also currently expanding my skills as a full-stack developer.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex gap-5 text-slate-400">
          <a
            href="https://github.com/Eljay0410"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/larry-cruz-127514273"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:larrycruz0204@gmail.com"
            className="hover:text-white"
            aria-label="Send email to Larry Cruz"
          >
            <Mail />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-30 blur-2xl" />

        <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <div className="rounded-[1.5rem] bg-slate-900 p-8">
            <div className="mx-auto h-52 w-52 overflow-hidden rounded-full border-4 border-cyan-400/40 bg-slate-800 shadow-[0_0_35px_rgba(34,211,238,0.25)] md:h-60 md:w-60">
              <img
                src={profilePic}
                alt="Larry Cruz profile"
                className="h-full w-full scale-125 object-cover object-center"
              />
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-3xl font-bold">Larry Cruz</h3>
              <p className="mt-2 text-slate-400">Frontend Developer</p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-white/10 p-4">
                <h4 className="text-xl font-bold text-cyan-400">3+</h4>
                <p className="text-xs text-slate-400">Projects</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <h4 className="text-xl font-bold text-cyan-400">1+</h4>
                <p className="text-xs text-slate-400">Years</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <h4 className="text-xl font-bold text-cyan-400">100%</h4>
                <p className="text-xs text-slate-400">Passion</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}