import React, { useEffect, useState } from "react";
import { useDarkMode } from "../../Generic/DarkModeContext/DarkModeContext";
import {motion} from "motion/react"

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">About</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">Work</a>
      </li>
      <li className="nav-li">
        <a className="nav-link">Contact</a>
      </li>
    </ul>
  );
}

const container = {
    width: 40,
    height: 80,
    backgroundColor: "white",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 4,
    position: "relative",
    overflow: "hidden",
}

const handle = {
    width: 30,
    height: 30,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
    zIndex: 2,
}

const iconWrapper = {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    height: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    pointerEvents: "none",
    zIndex: 1,
}

const iconStyle = {
    fontSize: 20,
    // transition: "opacity 0.3s ease",
    opacity: 1,
    color: "#fff",
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg ">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Osama
          </a>

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
                <span style={{ ...iconStyle, opacity: darkMode ? 0 : 1 }}>🌞</span>
                <span style={{ ...iconStyle, opacity: darkMode ? 1 : 0 }}>🌙</span>
            </motion.div>

            <motion.div
                layout
                transition={{
                    type: "spring",
                    duration: 0.25,
                    bounce: 0.2,
                }}
                style={handle}
            />
        </button> */}
          {/** will apply dark mode */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
            />
          </button>

            {/** nav list */}
          <nav className="hidden sm:flex"><Navigation /></nav>
            {/** nav list */}            

        </div>
      </div>

            {isOpen && <motion.div className="block overflow-hidden text-center sm:hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{height: "100vh"}}
            transition={{ duration: 1 }}>
                <nav className="pb-5"><Navigation /></nav>
            </motion.div>}

    </div>
  );
};

export default Navbar;
