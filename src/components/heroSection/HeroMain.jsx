import React from "react";
import HeroText from "./HeroText";
import Heropic from "./HeroPic";
import HeroGradient from "./HeroGradient";

const HeroMain = () => {
  return (
    <div className="flex flex-col items-center text-center md:text-left w-full mt-[0px]">
      <div className="flex md:flex-row sm:flex-col gap-8 px-4 max-w-[1200px] mx-auto mt-[0px] justify-between item-center">
        <HeroText />
        <Heropic />
      </div>
      <div className="flex justify-center mt-8 md:hidden">
        <a
          href="./images/files/Pramodi Dewindi PA.pdf"
          download
          className="border border-richMetallicGold rounded-3xl py-2 px-6 text-lg hover:bg-warmOliveTint transition-all duration-500 cursor-pointer text-softSage hover:text-deepForestGreen hover:font-semibold"
        >
          Download CV
        </a>
      </div>
      <HeroGradient />
    </div>
  );
};

export default HeroMain;
