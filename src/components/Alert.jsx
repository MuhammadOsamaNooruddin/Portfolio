import {motion, AnimatePresence} from "motion/react";

const Alert = ({type, message}) => {
    const alertVariants = {
        hidden: {opacity: 0, y:0, scale:0.8},
        visible: {opacity: 1, y:0, scale: 1},
        exit: {opacity: 0, y: -50, scale: 0.8}
    }
  return (
    <AnimatePresence>
    <motion.div className="fixed z-50 flex justify-center items-center top-5 right-5"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVariants}
        transition={{duration: 0.3, ease: "easeInOut"}}>
      <div className={`p-2 ${type === "danger" ? "bg-red-500" : "bg-[#00776a]"} text-indigo-500 leading-none lg:rounded-full rounded-md shadow-lg flex items-center p-5`}>
        {/* <p className={`flex rounded ${type === "danger" ? "bg-red-500" : "bg-lavender-500"} text-white `}>{type === "danger" ? "Failed: " : "Success: "} </p> */}
        <p className="mr-2 text-left text-white">{message}</p>
        </div>
    </motion.div>
    </AnimatePresence>
  );
}

export default Alert;