import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

const AboutMeMain = () => {
  return (
    <div className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between item-center">
        <div>
          <AboutMeText />
        </div>
        <div flex-1 flex justify-center items-center>
         <AboutMeImage/>
        </div>
    </div>
  );
};

export default AboutMeMain;