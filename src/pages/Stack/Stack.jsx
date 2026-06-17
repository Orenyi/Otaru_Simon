import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiSupabase } from "react-icons/si";
import { FiFolder, FiBookOpen, FiTarget } from "react-icons/fi";

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });

      return () => controls.stop();
    }
  }, [inView, count, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: <FiFolder />,
    value: 10,
    suffix: "+",
    label: "Projects",
    subLabel: "Built",
    color: "text-purple-400",
    glow: "bg-purple-500/20",
  },
  {
    icon: <FiBookOpen />,
    value: 2,
    suffix: "+",
    label: "Years",
    subLabel: "Learning",
    color: "text-green-400",
    glow: "bg-green-500/20",
  },
  {
    icon: <FiTarget />,
    value: 100,
    suffix: "%",
    label: "Dedication",
    subLabel: "",
    color: "text-purple-400",
    glow: "bg-purple-500/20",
  },
];

const techStack = [
  { icon: <FaReact />, color: "text-cyan-400", name: "React" },
  { icon: <SiTailwindcss />, color: "text-cyan-300", name: "Tailwind" },
  { icon: <SiJavascript />, color: "text-yellow-400", name: "JavaScript" },
  { icon: <FaHtml5 />, color: "text-orange-500", name: "HTML5" },
  { icon: <FaCss3Alt />, color: "text-blue-400", name: "CSS3" },
  { icon: <FaWordpress />, color: "text-white", name: "WordPress" },
  { icon: <SiSupabase />, color: "text-emerald-400", name: "Supabase" },
];

const Stack = () => {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-4 py-16 min-[375px]:px-6 md:px-10 lg:px-20"
    >
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl min-[375px]:p-5 md:p-8"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid grid-cols-3 gap-2 lg:w-[48%]">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center ${
                  index !== stats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <div
                  className={`mb-2 grid h-9 w-9 place-items-center rounded-xl ${item.glow} ${item.color} text-lg min-[375px]:h-10 min-[375px]:w-10 min-[375px]:text-xl md:h-12 md:w-12 md:text-2xl`}
                >
                  {item.icon}
                </div>

                <h3
                  className={`text-xl font-extrabold min-[375px]:text-2xl md:text-4xl ${item.color}`}
                >
                  <Counter value={item.value} suffix={item.suffix} />
                </h3>

                <p className="mt-1 text-[10px] font-medium text-[var(--text-secondary)] min-[375px]:text-xs md:text-sm">
                  {item.label}
                </p>

                {item.subLabel && (
                  <p className="text-[10px] text-[var(--text-muted)] min-[375px]:text-xs md:text-sm">
                    {item.subLabel}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 lg:w-[48%] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h4 className="mb-5 text-center text-sm font-semibold text-[var(--text-secondary)] md:text-base lg:text-left">
              Tech Stack
            </h4>

            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[var(--bg-primary)] to-transparent lg:hidden" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[var(--bg-primary)] to-transparent lg:hidden" />

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex w-max items-center gap-8 pr-8 lg:flex-wrap lg:gap-7"
              >
                {[...techStack, ...techStack].map((tech, index) => (
                  <div
                    key={index}
                    title={tech.name}
                    className={`grid h-11 w-11 shrink-0 place-items-center text-4xl transition duration-300 hover:scale-110 min-[375px]:h-12 min-[375px]:w-12 min-[375px]:text-5xl ${tech.color}`}
                  >
                    {tech.icon}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Stack;
