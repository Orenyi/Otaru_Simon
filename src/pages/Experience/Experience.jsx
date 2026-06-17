import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import { experience, education } from "./experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-4 py-20 min-[375px]:px-6 md:px-10 lg:px-20"
    >
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[4px] text-[var(--primary-light)]">
            Experience & Education
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            My Journey
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ExperienceCard experience={experience} />
          <EducationCard education={education} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
