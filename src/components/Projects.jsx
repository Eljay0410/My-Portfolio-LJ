import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

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

const webDevelopmentProjects = projects.filter(
  (project) => project.category === "Web Development"
);

const webDesigningProjects = projects.filter(
  (project) => project.category === "Web Designing"
);

function ProjectCard({ project, index }) {
  const hasLink = project.link && project.link !== "#";

  return (
    <motion.a
      href={hasLink ? project.link : undefined}
      target={hasLink ? "_blank" : undefined}
      rel={hasLink ? "noopener noreferrer" : undefined}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group block cursor-pointer rounded-[2rem] border border-white/10 bg-white/5 p-4 text-white no-underline backdrop-blur transition duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
    >
      <div className="mb-5 block overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-56 items-end p-5">
            <div className="h-2 w-20 rounded-full bg-cyan-400" />
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 px-1">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        {hasLink && (
          <ExternalLink
            size={20}
            className="shrink-0 text-slate-400 transition group-hover:text-white"
          />
        )}
      </div>

      <p className="mt-4 px-1 leading-7 text-slate-300">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2 px-1">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

function ProjectCategory({ title, projects }) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-4"
      >
        <h3 className="text-2xl font-bold text-white md:text-3xl">{title}</h3>
        <div className="h-px flex-1 bg-white/10" />
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">Selected Work</h2>
      </motion.div>

      <ProjectCategory
        title="Web Development"
        projects={webDevelopmentProjects}
      />

      <ProjectCategory title="Web Designing" projects={webDesigningProjects} />
    </section>
  );
}