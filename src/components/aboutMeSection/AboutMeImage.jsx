import React from "react";
import { LiaCircleSolid } from "react-icons/lia";

const AboutMeImage = () => {
  return (
    <div className="h-full flex items-center justify-center hover:scale-105 transition-transform duration-500">
        <img
          src="../images/uni.png"
          alt="Pramodi Dewindi"
          className="max-h-[350px] w-auto"
        />
    </div>
  );
};

export default AboutMeImage;
