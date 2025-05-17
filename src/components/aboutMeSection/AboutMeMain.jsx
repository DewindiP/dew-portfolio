import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-15 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between item-center">
        <div className="flex-2">
          <AboutMeText />
        </div>
        <div className=" flex-2 flex justify-center items-center">
         <AboutMeImage/>
        </div>
    </div>
  );
};

export default AboutMeMain;