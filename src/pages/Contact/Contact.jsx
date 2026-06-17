import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoPaperPlaneSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-4 py-20 min-[375px]:px-6 md:px-10 lg:px-20"
    >
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-950/50 via-[#0B1023] to-cyan-950/30 p-6 shadow-2xl shadow-purple-500/10 backdrop-blur-xl md:p-10"
      >
        <div className="absolute left-0 top-0 h-full w-1/2 bg-purple-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-full w-1/2 bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[160px_1fr_auto]">
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden h-28 w-28 place-items-center rounded-full border border-purple-400/20 bg-purple-500/10 text-5xl text-purple-400 shadow-lg shadow-purple-500/20 md:grid"
          >
            <IoPaperPlaneSharp />
          </motion.div>

          <div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-white md:text-5xl">
              Let’s build something amazing together
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
              I’m currently open to freelance opportunities and exciting
              frontend projects. Let’s bring your ideas to life!
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href="mailto:simonotaru14@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--primary)] to-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-1 hover:shadow-purple-500/40"
            >
              <FiMail />
              Send me an Email
            </a>

            <a
              href="tel:+2348167527125"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/10"
            >
              <FiPhoneCall />
              Schedule a Call
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
