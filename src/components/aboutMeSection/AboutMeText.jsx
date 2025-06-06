import React from "react";
import { FaUniversity } from "react-icons/fa";
import { BiSolidCertification } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeText = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center md:text-left w-full mt-[0px]">
      <h2
        className="text-4xl sm:text-5xl md:text-6xl text-mutedGold mb-8 md:mb-10"
      >
        About Me
      </h2>

      {/* Responsive Columns */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* About Me Section */}
        <div className="bg-richBlackGreen p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 text-ivory w-full md:w-1/3 mb-6 md:mb-0">
          <p className="font-normal sm:text-base text-justify mb-2">
            Hi! I’m Pramodi Dewindi
            <br />
            A passionate Frontend Developer & UI/UX Enthusiast. I specialize in
            crafting responsive, user-friendly web and mobile apps using
            React.js, Flutter, JavaScript, and more.
            <br />
            With a strong eye for design and a knack for clean code, I love
            turning ideas into smooth, engaging experiences. I’m excited to
            collaborate and bring ideas to life!
            <br />
            Let’s build something awesome together!
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-richBlackGreen p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 text-ivory w-full md:w-1/3 mb-6 md:mb-0">
          <p className="text-xl md:text-2xl text-mutedGold text-center mb-2">
            Education
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <FaUniversity className="text-lightAvacadoGreen text-3xl md:text-4xl mr-4" />
            <div>
              <p className="text-md font-normal">
                Institute of Technology, University of Moratuwa
              </p>
              <p className="text-softSage text-md">
                Undergraduate in Information Technology
              </p>
              <p className="text-softSage text-md">2022 - Present</p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-richBlackGreen p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 text-ivory w-full md:w-1/3">
          <p className="text-xl md:text-2xl text-mutedGold text-center mb-2">
            Certifications
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <p className="font-normal text-xs sm:text-base text-justify mb-2">
              Each certification marks a step in my journey of learning, growth,
              and commitment to excellence.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <BiSolidCertification className="text-lightAvacadoGreen text-3xl md:text-4xl" />
            <Link to="/certifications">
              <button className="mt-2 border border-richMetallicGold rounded-3xl py-1 px-4 text-sm hover:bg-warmOliveTint transition-all duration-500 cursor-pointer text-softSage hover:text-deepForestGreen hover:font-semibold">
                View All Certifications
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center md:justify-start">
        <button
          className="border border-richMetallicGold rounded-3xl py-2 px-6 text-base md:text-lg mt-6 hover:bg-warmOliveTint transition-all duration-500 cursor-pointer text-softSage hover:text-deepForestGreen hover:font-semibold"
          onClick={() => navigate("/projects")}
        >
          My Projects
        </button>
      </div>
    </div>
  );
};

export default AboutMeText;
