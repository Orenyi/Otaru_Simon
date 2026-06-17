import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiLoader,
} from "react-icons/fi";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./projectData";

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleToggleProjects = () => {
    setIsLoading(true);

    setTimeout(() => {
      setShowAll((prev) => !prev);
      setIsLoading(false);
    }, 700);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-6 py-20 md:px-10 lg:px-10 xl:px-20"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary-light)]">
              Projects
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
              Featured Projects
            </h2>
          </motion.div>

          {projects.length > 3 && (
            <motion.button
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              onClick={handleToggleProjects}
              disabled={isLoading}
              className="hidden rounded-xl border border-purple-500/40 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:inline-flex sm:items-center sm:gap-2"
            >
              {isLoading ? (
                <>
                  Loading <FiLoader className="animate-spin" />
                </>
              ) : showAll ? (
                <>
                  Show Less <FiChevronUp />
                </>
              ) : (
                <>
                  View More Projects <FiArrowRight />
                </>
              )}
            </motion.button>
          )}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {projects.length > 3 && (
          <motion.button
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onClick={handleToggleProjects}
            disabled={isLoading}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-6 py-4 text-sm font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:hidden"
          >
            {isLoading ? (
              <>
                Loading <FiLoader className="animate-spin" />
              </>
            ) : showAll ? (
              <>
                Show Less <FiChevronUp />
              </>
            ) : (
              <>
                View More Projects <FiChevronDown />
              </>
            )}
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default Project;
