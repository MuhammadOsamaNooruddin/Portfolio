import React, { Suspense } from "react";
import HeroText from "../../components/HeroText";
import ParallaxBackground from "../../components/ParallaxBackground";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Astronaut } from "../../components/HeroSectionModel/Astronut";
import { useMediaQuery } from "react-responsive";
// import {useDarkMode} from "../../Generic/DarkModeContext/DarkModeContext";
import { motion } from "motion/react";
import Loader from "../../components/Loader/Loader";
import { FloatingButtons } from "../../components/FloatingButtonsSection/FloatingButtons";

// const container = {
//     width: 40,
//     height: 80,
//     backgroundColor: "white",
//     borderRadius: 50,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     position: "relative",
//     overflow: "hidden",
// }

// const handle = {
//     width: 40,
//     height: 38,
//     backgroundColor: "#EF973F",
//     borderRadius: "50%",
//     zIndex: 2,
// }

// const iconWrapper = {
//     position: "absolute",
//     top: 10,
//     left: 0,
//     right: 0,
//     height: 60,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "space-between",
//     pointerEvents: "none",
//     zIndex: 1,
// }

// const iconStyle = {
//     fontSize: 20,
//     transition: "opacity 0.3s ease",
//     opacity: 1,
//     color: "#fff",
// }

const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  // const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      id="home"
      className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />

      {/** background images */}
      <ParallaxBackground />
      {/** background images */}

      {/** 3D Model */}

      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh", margin: 0 }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -0.15, 0]}
              />
            </Float>
          </Suspense>
        </Canvas>
      </figure>

      {/** 3D Model */}

      {/** Social Links */}
      {/* <section className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3 items-center p-3 pt-5 pb-5 bg-[#00776A] rounded-4xl sm:gap-5"> */}
        {/** will apply dark mode */}
        {/* <button onClick={toggleDarkMode} className="p-4 curs-pointer text-neutral-400 hover:text-white focus:outline-none">
            <img src={`${darkMode ? "assets/moon.png" : "assets/sun.png"}`} alt={`${darkMode ? "Dark_Mode" : "Light_Mode"}`} className="cursor-pointer" />
          </button> */}
        {/* <button
            onClick={toggleDarkMode}
            style={{
                ...container,
                justifyContent: darkMode ? "flex-start" : "flex-end",
            }}
        >
            <motion.div style={iconWrapper}>
                <img src='assets/sun.png' alt="dark" style={{ ...iconStyle, opacity: darkMode ? 0 : 1 }} />
                <img src='assets/moon.png' alt="light" style={{ ...iconStyle, opacity: darkMode ? 1 : 0 }} />
            </motion.div>

            <motion.div
                layout
                transition={{
                    type: "spring",
                    duration: 1,
                    bounce: 0.5,
                }}
                style={handle}
            />
        </button> */}
        {/** will apply dark mode */}
        {/* <a
          href="https://www.linkedin.com/in/muhammad-osama-noor-uddin-1908741b4/"
          target="_blank"
        >
          <img
            className=" transition-transform hover:scale-110 hover:filter hover:invert"
            src="assets/linkedin-white.png"
            alt="linedin"
            style={{ width: "40px", height: "40px", color: "white" }}
          />
        </a>
        <a href="#contactEmail" className="">
          <img
            className="transition-transform hover:scale-110 hover:filter hover:invert"
            src="assets/mail-white.png"
            alt="contact"
            style={{ width: "40px", height: "40px" }}
          />
        </a>{" "}
        <a href="https://github.com/MuhammadOsamaNooruddin" target="_blank">
          <img
            className=" transition-transform hover:scale-110 hover:filter hover:invert"
            src="assets/github-white.png"
            alt="linedin"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
        <a href="/" target="_blank">
          <img
            className=" transition-transform hover:scale-110 hover:filter hover:invert"
            src="assets/insta-white.png"
            alt="linedin"
            style={{ width: "40px", height: "40px" }}
          />
        </a> */}
      {/* </section> */}
      {/** Social Links */}
      <FloatingButtons />
    </section>
  );
};

export default HeroSection;
