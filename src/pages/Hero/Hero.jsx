import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaReact, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] px-4 pt-24 lg:pt-36 text-white min-[375px]:px-6 md:px-12 lg:px-10 xl:px-20"
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124,58,237,0.18), transparent 40%)`,
        }}
      />

      {/* Background glow */}
      <div className="absolute left-[-120px] top-24 h-[320px] w-[320px] rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute right-[-120px] top-56 h-[320px] w-[320px] rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300"
          >
            Front-End Developer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl font-heading text-[2.25rem] font-extrabold leading-[1.22] tracking-tight min-[375px]:text-[2.55rem] sm:text-4xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            I build clean, <br />
            responsive &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              user-focused
            </span>{" "}
            web experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] md:text-[0.8rem] lg:text-[1rem]"
          >
            I’m Simon Orenyi Otaru, a Front-End Developer and Computer Science
            undergraduate passionate about creating intuitive web applications
            with React.js, Tailwind CSS, Supabase, and AI integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] px-7 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-1 hover:shadow-purple-500/40"
            >
              View My Work
            </a>

            <a
              href="/Simon-CV.pdf"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/10"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="https://github.com/Orenyi"
              target="_blank"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-300 transition hover:border-purple-400/50 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/simon-otaru-731b48355"
              target="_blank"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-300 transition hover:border-purple-400/50 hover:text-white"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:simonotaru14@gmail.com"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-300 transition hover:border-purple-400/50 hover:text-white"
            >
              <MdOutlineMail />
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="relative mx-auto flex h-[500px] w-full max-w-[520px] items-center justify-center"
        >
          {/* Center card */}
          <div className="relative h-[360px] w-[300px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-2xl shadow-purple-500/20 backdrop-blur-xl md:h-[410px] md:w-[340px]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-400/10" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-5 h-14 w-14 rounded-2xl bg-purple-500/20 p-3 text-3xl text-purple-300">
                  <FaReact />
                </div>

                <p className="font-mono text-sm leading-7 text-slate-300">
                  const developer = {"{"}
                  <br />
                  &nbsp;&nbsp;name:{" "}
                  <span className="text-purple-300">"Simon Otaru"</span>,
                  <br />
                  &nbsp;&nbsp;skills: [
                  <span className="text-cyan-300">"React"</span>,{" "}
                  <span className="text-cyan-300">"Tailwind"</span>,
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-cyan-300">"JavaScript"</span>,
                  <span className="text-cyan-300">"Supabase"</span>],
                  <br />
                  &nbsp;&nbsp;focus:{" "}
                  <span className="text-green-300">
                    "Building useful web apps"
                  </span>
                  <br />
                  {"}"}
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
                Available for opportunities
              </div>
            </div>
          </div>

          {/* Floating icons */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-4 top-20 grid h-20 w-20 place-items-center rounded-2xl border border-white/10 bg-white/5 text-4xl text-cyan-300 backdrop-blur-xl"
          >
            <FaReact />
          </motion.div>

          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute right-6 top-28 grid h-20 w-20 place-items-center rounded-2xl border border-white/10 bg-white/5 text-4xl text-yellow-300 backdrop-blur-xl"
          >
            <SiJavascript />
          </motion.div>

          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-24 left-8 grid h-20 w-20 place-items-center rounded-2xl border border-white/10 bg-white/5 text-4xl text-cyan-300 backdrop-blur-xl"
          >
            <SiTailwindcss />
          </motion.div>

          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 5.2, repeat: Infinity }}
            className="absolute bottom-20 right-8 grid h-20 w-20 place-items-center rounded-2xl border border-white/10 bg-white/5 text-4xl text-blue-300 backdrop-blur-xl"
          >
            <FaWordpress />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
