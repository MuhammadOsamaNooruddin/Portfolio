import React from "react";
import Navbar from "./sections/Navbar/Navabr";
import { DarkModeProvider } from "./Generic/DarkModeContext/DarkModeContext";
import HeroSection from "./sections/HeroSection/Hero";
import About from "./sections/about/About";
import Experiences from "./sections/Experiences/Experiences";
import Skills from "./sections/Skills/Skills";

const App = () => {
  return (
    <DarkModeProvider>
    <div className="container mx-auto max-w-7xl">
      {/** Navbar */}
      <Navbar />
      {/** Hero section */}
      <HeroSection />
      {/** About */}
      <About />
      
      {/** Experience */}
      <Experiences />
      {/** Skills */}
      <Skills />
      {/** Projects */}
      {/** Footer */}
    </div>
    </DarkModeProvider>
  );
};

export default App;
