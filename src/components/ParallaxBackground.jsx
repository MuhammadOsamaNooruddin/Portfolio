import React from "react";
import { useScroll, useSpring, useTransform } from "motion/react";
import { motion } from "motion/react";

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
     const x = useSpring(scrollYProgress, {
      damping: 50})
    const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]); 
    const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
    const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "URL(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        ></div>
        {/* Background mountain layer 3 */}
        <motion.div className="absolute inset-0 -z-40" style={{
            backgroundImage: "URL(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y
          }}>

        </motion.div>
        {/* Background mountain layer 2 */}
        <motion.div className="absolute inset-0 -z-30" style={{
            backgroundImage: "URL(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX
          }}></motion.div>
        {/* Background mountain layer 1 */}
        <motion.div className="absolute inset-0 -z-20" style={{
            backgroundImage: "URL(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y
          }}></motion.div>
        <motion.div className="absolute inset-0 -z-10" style={{
            backgroundImage: "URL(/assets/mounatin-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y
          }}></motion.div>
      </div>
    </section>
  );
};

export default ParallaxBackground;
