import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_25px_80px_rgba(124,58,237,0.22)]"
    >
      <div className="relative h-48 overflow-hidden sm:h-56">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-70" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--text-secondary)]">
          {project.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.liveLink}
            target="_blank"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-400 hover:bg-purple-500/20"
          >
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
