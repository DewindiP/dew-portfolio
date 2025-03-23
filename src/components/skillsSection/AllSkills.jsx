import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaDartLang } from "react-icons/fa6";
import SingleSkill from "./SingleSkill";

const skills = [
    {
        skill:"HTML",
        icon: FaHtml5,
    },
    {
        skill:"CSS",
        icon: FaCss3Alt,
    },
    {
        skill:"JavaScript",
        icon: IoLogoJavascript,
    },
    {
        skill:"TypeScript",
        icon: SiTypescript,
    },
    {
        skill:"ReactJS",
        icon: FaReact,
    },
    {
        skill:"Flutter",
        icon: FaFlutter,
    },
    {
        skill:"Tailwind CSS",
        icon: RiTailwindCssFill,
    },
    {
        skill:"NodeJS",
        icon: FaNodeJs,
    },
    {
        skill:"MySQL",
        icon: SiMysql,
    },
    {
        skill:"Firebase",
        icon: IoLogoFirebase,
    },
    {
        skill:"MongoDB",
        icon: SiMongodb,
    },
    {
        skill:"Java",
        icon: FaJava,
    },
    {
        skill:"Python",
        icon: FaPython,
    },
    {
        skill:"Dart",
        icon: FaDartLang,
    },
    {
        skill:"Git",
        icon: FaGitAlt,
    },
    {
        skill:"Figma",
        icon: FaFigma,
    },
];



const AllSkills = () => {
    return (
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-2">
          {skills.map((item, index) => (
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon className="w-14 h-14 text-gold" />} />
          ))}
        </div>
      </div>
    );};
  

export default AllSkills;