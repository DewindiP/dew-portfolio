import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const titles = [
  "Front-End Web Developer",
  "Mobile Developer",
  "Software Engineer",
];

const HeroText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h3 className="text-4xl font-special font-light text-warmOliveTint">
        Hi There,
      </h3>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-warmOliveTint">
        I'm Pramodi Dewindi
      </h1>
      <motion.h2
        key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="lg:text-2xl font-special sm:text-xl text-richMetallicGold"
      >
        {titles[index]}
      </motion.h2>
      <p className="text-lg mt-4 text-warmBeige">
        A Passionate Web Developer with a keen interest in <br />
        developing responsive websites and web applications.
      </p>
      <div className="w-full flex justify-start">
        <button className="border border-richMetallicGold rounded-3xl py-2 px-6 text-lg mt-6 hover:bg-warmOliveTint transition-all duration-500 cursor-pointer text-softSage hover:text-deepForestGreen hover:font-semibold">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default HeroText;
