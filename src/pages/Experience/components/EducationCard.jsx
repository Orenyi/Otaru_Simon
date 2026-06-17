import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

const EducationCard = ({ education }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-500/20 text-2xl text-cyan-400">
          <FiBookOpen />
        </div>

        <h3 className="text-2xl font-bold text-white">Education</h3>
      </div>

      <div className="mt-8 border-l border-cyan-500/30 pl-6">
        <div className="mb-2 h-3 w-3 rounded-full bg-cyan-400" />

        <h4 className="text-xl font-semibold text-white">{education.school}</h4>

        <p className="mt-3 text-lg font-medium text-green-400">
          {education.degree}
        </p>

        <p className="mt-2 text-[var(--text-secondary)]">
          {education.graduation}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationCard;
