import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab hover:z-200"
      src={image}
      style={style}
      drag
      whileHover={{ scale: 1.05 }}
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute hover:z-200 px-1 py-4 text-xl text-center rounded-full ring ring-gray-700  font-extralight bg-storm w-[12rem] cursor-grab "
      style={style}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      whileHover={{ scale: 1.05 }}
    >
      {text}
    </motion.div>
  );
};

export default Card;
