import React from 'react';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center md:text-left">
      <h2 className="text-6xl text-mutedGold mb-10">About Me</h2>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
        
        {/* About Me Section */}
        <div className="bg-richBlackGreen p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 text-ivory w-full md:w-1/2">
          <p className="font-normal text-sm text-justify sm:text-justify mb-4">
          Hi! I’m Pramodi Dewindi 
          <br />
          A passionate Frontend Developer & UI/UX Enthusiast. I specialize in crafting responsive, user-friendly web and mobile apps using React.js, Flutter, JavaScript, and more. 
          <br />
          With a strong eye for design and a knack for clean code, I love turning ideas into smooth, engaging experiences. 
          I’m excited to collaborate and bring ideas to life!
          <br />
          Let’s build something awesome together!
           
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-richBlackGreen p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 text-ivory w-full md:w-1/2">
          <p className="text-2xl text-mutedGold text-center mb-2">Education</p>
          <div className="flex items-center">
            <FaUniversity className="text-lightAvacadoGreen text-4xl mr-4" />
            <div>
              <p className="text-md font-normal">Institute of Technology, University of Moratuwa</p>
              <p className="text-softSage text-md">Undergraduate in Information Technology</p>
              <p className="text-softSage text-md">2022 - Present</p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-start">
      <button className="border border-richMetallicGold rounded-3xl py-2 px-6 text-lg mt-6 hover:bg-warmOliveTint transition-all duration-500 cursor-pointer text-softSage hover:text-deepForestGreen hover:font-semibold">
        My Projects
      </button>
      </div>
    </div>
  );
};


export default AboutMeText;
