import React from "react";
import { LiaCircleSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Heropic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center  mt-[0px]"
    >
      <img
        src="/images/myprofile.png"
        alt="Pramodi Dewindi"
        className="max-h-[325px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <LiaCircleSolid className="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-mutedGold blur-md animate-[spin_20s_linear_infinte]" />
      </div>
    </motion.div>
    
  );
};

export default Heropic;
