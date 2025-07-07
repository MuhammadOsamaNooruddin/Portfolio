import { animate } from "motion";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { ShinyButton } from "./ShinnyResumeButton";


const HeroText = () => {
    const words = ["Modern", "Scalable","Responsive"];
    const variants={
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md: md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}

      <div className="flex-col hidden md:flex c-space">
        <motion.h1
            variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Osama
        </motion.h1>

        <div className="flex flex-col items-start">
          <motion.p className="text-5xl font-medium text-neutral-300"  variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}>
            Frontend Developer Specializing in
          </motion.p>
          <motion.div
           variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}>
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p className="text-4xl font-medium text-neutral-300"  variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}>
            Digital Experience
          </motion.p>
          <motion.div className="mt-5" variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}>
          <a href="/assets/Osama_CV.pdf" target="_blank" rel="noopener noreferrer"><ShinyButton>Download CV</ShinyButton></a> 
          </motion.div>
        </div>
      </div>

      {/* Desktop View */}

      {/* Mobile View */}

      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium"  variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}>Hi, I'm Osama</motion.p>
        <div className="">
          <motion.p className="text-5xl font-black text-neutral-300"  variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}>Building</motion.p>
          <motion.div  variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}>
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p className="text-4xl font-black text-neutral-300"  variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}>
            Digital Experience
          </motion.p>
          <motion.div className="mt-5" variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}>
          <a href="/assets/Osama_CV.pdf" target="_blank" rel="noopener noreferrer"><ShinyButton>Download CV</ShinyButton></a> 
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
    </div>
  );
};

export default HeroText;
