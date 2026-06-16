import React from "react";
import Hero from "./pages/Hero/Hero";
import Experience from "./pages/Experience/Experience";
import MyExpertise from "./pages/MyExpertise/MyExpertise";
import Project from "./pages/Project/Project";

const App = () => {
  return (
    <section>
      <Hero />
      <MyExpertise />
      <Project />
      <Experience />
    </section>
  );
};

export default App;
