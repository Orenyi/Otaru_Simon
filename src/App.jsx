import React from "react";
import Hero from "./pages/Hero/Hero";
import Experience from "./pages/Experience/Experience";
import MyExpertise from "./pages/MyExpertise/MyExpertise";
import Project from "./pages/Project/Project";
import Stack from "./pages/Stack/Stack";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <section>
      <Hero />
      <MyExpertise />
      <Project />
      <Stack />
      <Experience />
      <Contact />
    </section>
  );
};

export default App;
