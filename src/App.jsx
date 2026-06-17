import React from "react";
import Hero from "./pages/Hero/Hero";
import Experience from "./pages/Experience/Experience";
import MyExpertise from "./pages/MyExpertise/MyExpertise";
import Project from "./pages/Project/Project";
import Stack from "./pages/Stack/Stack";
import Contact from "./pages/Contact/Contact";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <MyExpertise />
      <Project />
      <Stack />
      <Experience />
      <Contact />
      <Footer />
    </section>
  );
};

export default App;
