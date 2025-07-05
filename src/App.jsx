import React from "react";
import Navbar from "./sections/Navbar/Navabr";
import { DarkModeProvider } from "./Generic/DarkModeContext/DarkModeContext";
import HeroSection from "./sections/HeroSection/Hero";

const App = () => {
  return (
    <DarkModeProvider>
    <div className="container mx-auto max-w-7xl">
      {/** Navbar */}
      <Navbar />
      {/** Hero section */}
      <HeroSection />
      {/** About */}
      {/** Skills */}
      {/** Experience */}
      {/** Projects */}
      {/** Footer */}
    </div>
    </DarkModeProvider>
  );
};

export default App;
