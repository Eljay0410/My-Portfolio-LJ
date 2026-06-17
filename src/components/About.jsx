import { motion } from "framer-motion";
import { skills } from "../data/skills";

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

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          I build clean, responsive, and visually engaging web experiences.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I am a frontend developer with a strong interest in web design and
          graphic design. I enjoy creating modern interfaces that are clean,
          responsive, and easy to use. My goal is to combine good design,
          smooth interactions, and well-structured frontend development to build
          websites that look professional and work well across different
          devices.
        </p>

        

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}