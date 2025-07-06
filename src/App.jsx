import Navbar from "./sections/Navbar/Navabr";
import { DarkModeProvider } from "./Generic/DarkModeContext/DarkModeContext";
import HeroSection from "./sections/HeroSection/Hero";
import About from "./sections/about/About";
import Experiences from "./sections/Experiences/Experiences";
import Skills from "./sections/Skills/Skills";
import { SmoothCursor } from "./components/SmoothCursor/moothCursor";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import { Background } from "./components/background";
import Footer from "./sections/Footer/Footer";

const App = () => {
  return (
    <DarkModeProvider>
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <HeroSection />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SmoothCursor />
      <Background />
    </div>
    </DarkModeProvider>
  );
};

export default App;
