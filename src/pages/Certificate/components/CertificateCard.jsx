import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiAward } from "react-icons/fi";

const CertificateCard = ({ certificate, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_25px_70px_rgba(124,58,237,0.15)] sm:p-5"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-[80px] transition duration-500 group-hover:bg-purple-500/20" />

      {/* Certificate Preview */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1023]">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[#050816]/80 text-xl text-purple-300 backdrop-blur-md">
          <FiAward />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {certificate.title}
            </h3>

            <p className="mt-1 text-sm font-medium text-purple-300">
              {certificate.issuer}
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--text-muted)]">
            {certificate.date}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
          {certificate.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {certificate.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={certificate.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 transition hover:text-purple-200"
        >
          View Certificate
          <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </motion.article>
  );
};

export default CertificateCard;
