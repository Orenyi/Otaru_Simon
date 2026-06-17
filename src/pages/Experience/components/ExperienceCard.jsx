import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-purple-500/20 text-2xl text-purple-400">
          <FiBriefcase />
        </div>

        <h3 className="text-2xl font-bold text-white">Work Experience</h3>
      </div>

      <div className="mt-8 border-l border-purple-500/30 pl-6">
        <div className="mb-2 h-3 w-3 rounded-full bg-purple-400" />

        <h4 className="text-xl font-semibold text-white">{experience.title}</h4>

        <p className="mt-1 text-[var(--secondary)]">{experience.company}</p>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          {experience.period}
        </p>

        <ul className="mt-5 space-y-3">
          {experience.responsibilities.map((item, index) => (
            <li
              key={index}
              className="text-sm leading-7 text-[var(--text-secondary)]"
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
