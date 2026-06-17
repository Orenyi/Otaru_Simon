import React from "react";
import { FaGithub, FaLinkedinIn, FaCode, FaWhatsapp } from "react-icons/fa";

import { MdOutlineMail, MdLocationOn } from "react-icons/md";
import { FiPhone, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[var(--bg-primary)] px-4 py-12 min-[375px]:px-6 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white">Let’s Connect</h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
              I’m always open to discussing new projects, creative ideas or
              opportunities.
            </p>

            <div className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <a
                href="mailto:simonotaru14@gmail.com"
                className="flex items-center gap-3 transition hover:text-purple-300"
              >
                <MdOutlineMail />
                simonotaru14@gmail.com
              </a>

              <a
                href="https://wa.me/2348167527125"
                target="_blank"
                className="flex items-center gap-3 transition hover:text-purple-300"
              >
                <FaWhatsapp />
                +234 816 752 7125
              </a>

              <p className="flex items-center gap-3">
                <MdLocationOn />
                Abuja, Nigeria
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com/Orenyi"
                target="_blank"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-400/50 hover:text-purple-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/simon-otaru-731b48355"
                target="_blank"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-400/50 hover:text-purple-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:simonotaru14@gmail.com"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-400/50 hover:text-purple-300"
              >
                <MdOutlineMail />
              </a>
            </div>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-12">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--text-secondary)]">
              {["Home", "Stack", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="transition hover:text-purple-300"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-12">
            <h3 className="text-xl font-bold text-white">Let’s Build</h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
              Great things happen when ideas meet code. Let’s create something
              impactful together.
            </p>

            <div className="mt-6 grid h-14 w-14 place-items-center rounded-full border border-purple-500/30 bg-purple-500/10 text-2xl text-purple-300">
              <FaCode />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Otaru Simon Orenyi. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="grid h-11 w-11 place-items-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-xl text-purple-300 transition hover:-translate-y-1 hover:bg-purple-500/20"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
