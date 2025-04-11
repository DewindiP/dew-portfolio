import React from 'react';

const AboutMeImage = () => {
  return (
    <div className="h-[400px] w-[400px] mt-[150px] flex justify-center relative sm:justify-center sm: items-center sm:mt-[100px] sm:w-[400px] sm:h-[400px]">
        <div className="h-[400px] w-[250px] rounded-[80px] absolute overflow-hidden flex justify-center items-center">
            <img 
            src="../images/uni1...jpg " alt="about me image" 
            className="h-[100%] w-auto object-cover" />
        </div>
        <div className="absolute top-[8px] left-[60px] h-[400px] w-[250px] bg-gradient-to-tr from-oliveGreen to-mutedGold rounded-bl-[80px] rounded-tr-[80px] rounded-br-[40px] rounded-tl-[40px] -z-30"></div>
    </div>
  );
};

export default AboutMeImage;