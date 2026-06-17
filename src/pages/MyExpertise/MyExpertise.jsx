import React from "react";
import { motion } from "framer-motion";

import { FaCode, FaReact, FaWordpress } from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const expertiseData = [
  {
    icon: <FaCode />,
    title: "Front-End Development",
    description:
      "Building responsive and interactive UIs with modern technologies.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "text-purple-400",
    glow: "bg-purple-500/20",
  },

  {
    icon: <FaReact />,
    title: "React.js Development",
    description:
      "Building scalable SPAs with component-based architecture and state management.",
    tags: ["React", "Hooks", "Context"],
    color: "text-cyan-400",
    glow: "bg-cyan-500/20",
  },

  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    description:
      "Creating beautiful, accessible and pixel-perfect designs with Tailwind.",
    tags: ["Tailwind", "UI/UX", "Responsive"],
    color: "text-cyan-300",
    glow: "bg-cyan-400/20",
  },

  {
    icon: <FaWordpress />,
    title: "WordPress & Elementor",
    description:
      "Customizing themes, building pages and managing content with Elementor.",
    tags: ["WordPress", "Elementor", "CMS"],
    color: "text-yellow-400",
    glow: "bg-yellow-400/20",
  },
];

const MyExpertise = () => {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden px-6 py-20 md:px-10  lg:px-10 xl:px-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[4px] text-[var(--primary-light)] font-medium">
            What I Do
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
            My Expertise
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-6
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-purple-500/30
              hover:shadow-[0_20px_60px_rgba(124,58,237,0.2)]
            "
            >
              {/* Glow */}

              <div
                className={`absolute -top-10 -left-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${item.glow}`}
              />

              {/* Icon */}

              <div
                className={`
                relative
                z-10
                text-4xl
                mb-6
                ${item.color}
              `}
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-[var(--text-secondary)] leading-7 text-sm mb-6">
                {item.description}
              </p>

              {/* Tags */}

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="
                    px-3
                    py-1.5
                    rounded-full
                    text-xs
                    text-slate-300
                    border
                    border-white/10
                    bg-white/[0.04]
                  "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyExpertise;
