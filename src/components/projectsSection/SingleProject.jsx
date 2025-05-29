import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const SingleProject = ({ name, year, align, image, link, githublink }) => {
  return (
    <div
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-lightAvacadoGreen">
          {name}
        </h2>
        <h2
          className={`text-xl font-thin text-sageTintedOlive font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          className={`text-lg flex gap-2 items-center text-oliveGreen hover:text-richMetallicGold transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View <BiSolidRightTopArrowCircle />
        </a>
        <a
          href={githublink}
          className={`text-lg flex gap-2 items-center text-oliveGreen hover:text-richMetallicGold transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
         <FaGithub /> GitHub 
        </a>
      </div>
      <div className="relative w-[400px] h-[220px] rounded-xl overflow-hidden border border-ivory">
        <div className="absolute top-0 left-0 w-full h-full bg-paleOliveGreen opacity-50 transition-opacity duration-500 hover:opacity-0"></div>
        <img
          src={image}
          alt="Project Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SingleProject;
