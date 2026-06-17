import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";

const navLinks = [
  { id: "expertise", label: "about", number: "02" },
  { id: "projects", label: "projects", number: "03" },
  { id: "stack", label: "stack", number: "04" },
  { id: "experience", label: "experience", number: "04" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed left-0 top-0 z-50 w-full px-4 py-4 transition-all duration-300 min-[375px]:px-6 lg:px-10 xl:px-20 ${
          scrolled
            ? "border-b border-white/10 bg-[#050816]/70 shadow-lg shadow-purple-500/10 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="text-3xl text-purple-300 transition hover:text-purple-400"
          >
            <img src="/logo.png" alt="Logo" className="w-[50px]" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="group relative flex items-end gap-2 text-white"
              >
                <span className="mb-5 text-xs font-semibold text-slate-400 transition group-hover:text-purple-300">
                  {link.number}
                </span>

                <span className="font-heading text-xl font-bold lowercase tracking-tight">
                  // {link.label}
                </span>

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick("contact")}
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--primary)] to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-1 hover:shadow-purple-500/40 lg:inline-flex"
          >
            Let’s Connect <FiArrowRight />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-2xl text-white backdrop-blur lg:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 right-4 top-20 z-40 rounded-3xl border border-white/10 bg-[#050816]/90 p-5 shadow-2xl shadow-purple-500/20 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left transition hover:border-purple-500/40 hover:bg-purple-500/10"
                >
                  <span className="font-heading text-lg font-bold text-white">
                    // {link.label}
                  </span>

                  <span className="text-xs font-semibold text-purple-300">
                    {link.number}
                  </span>
                </button>
              ))}

              <button
                onClick={() => handleNavClick("contact")}
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-blue-600 px-5 py-4 text-sm font-semibold text-white"
              >
                Let’s Connect <FiArrowRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
