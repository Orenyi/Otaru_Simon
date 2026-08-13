import React from "react";
import { motion } from "framer-motion";
import CertificateCard from "./components/CertificateCard";
import { certificates } from "./certificateData";

const Certificate = () => {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-4 py-20 min-[375px]:px-6 md:px-8 lg:px-10 xl:px-12"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[var(--primary-light)]">
            Certifications
          </p>

          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Credentials that strengthen my toolkit.
          </h2>
        </motion.div>

        {/* Certificates */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
