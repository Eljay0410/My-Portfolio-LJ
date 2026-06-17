import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

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

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-8 text-center backdrop-blur md:p-14"
      >
        <h2 className="text-3xl font-bold md:text-5xl">
          Let&apos;s work together.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Have a project, idea, or collaboration in mind? Send me a message and
          let&apos;s build something great.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-4 text-slate-300 sm:flex-row">
          <a
            href="mailto:larrycruz0204@gmail.com"
            className="flex items-center gap-2 transition hover:text-cyan-400"
          >
            <Mail size={18} />
            larrycruz0204@gmail.com
          </a>

          <a
            href="tel:09458631946"
            className="flex items-center gap-2 transition hover:text-cyan-400"
          >
            <Phone size={18} />
            09458631946
          </a>
        </div>

        <a
          href="mailto:larrycruz0204@gmail.com?subject=Portfolio Inquiry"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
        >
          Say Hello <Mail size={18} />
        </a>
      </motion.div>
    </section>
  );
}