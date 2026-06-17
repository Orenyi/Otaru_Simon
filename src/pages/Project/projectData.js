import otaruFit from "../../assets/projects/otaru_fit.webp";
import dentalCare from "../../assets/projects/dental_care.webp";
import resumeAI from "../../assets/projects/resume_ai.webp";
import vima from "../../assets/projects/vima.webp";
import timeApp from "../../assets/projects/timeapp.webp";
import cleva from "../../assets/projects/cleva.webp";

export const projects = [
  {
    id: 1,
    title: "Resume AI",
    description:
      "AI-powered resume builder with templates, authentication, dashboard and PDF export.",
    image: resumeAI,
    tags: ["React.js", "Tailwind CSS", "Supabase"],
    liveLink: "https://resume-aim-two.vercel.app",
    githubLink: "https://github.com/Orenyi/Resume_ai",
  },
  {
    id: 2,
    title: "Dental Care",
    description:
      "Dental clinic website with online appointment booking and fully responsive layout.",
    image: dentalCare,
    tags: ["React.js", "Tailwind CSS"],
    liveLink: "https://stellular-pavlova-a40969.netlify.app",
    githubLink: "https://github.com/Orenyi/OTARU_dental_care",
  },
  {
    id: 3,
    title: "OTARU FIT",
    description:
      "Modern fitness website with animated sections, trainer showcases and responsive design.",
    image: otaruFit,
    tags: ["React.js", "Tailwind CSS"],
    liveLink: "https://otaru-fit.netlify.app",
    githubLink: "https://github.com/Orenyi/OTARU_fit",
  },
  {
    id: 4,
    title: "Cleva",
    description: "Cleva is a banking app, so I just recreated their homepage ",
    image: cleva,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://tranquil-chaja-5d4398.netlify.app/",
    githubLink: "https://github.com/Orenyi/Clevaprotype",
  },

  {
    id: 5,
    title: "TimeApp",
    description:
      "A responsive real-time clock web application built with React and Tailwind CSS",
    image: timeApp,
    tags: ["React.js", "Tailwind CSS"],
    liveLink: "https://timewebapp.netlify.app/",
    githubLink: "https://github.com/Orenyi/TimeApp",
  },

  {
    id: 6,
    title: "Vima",
    description:
      "Get the Ultimate Nigerian TV Experience and More – Download Our App Now!",
    image: vima,
    tags: ["WordPress", "Elementor"],
    liveLink: "https://dev-vima-ng.pantheonsite.io/",
  },
];
