import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaLightbulb,
  FaHandsHelping,
  FaTools,
} from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiMysql, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill, RiTeamFill, RiUserCommunityFill } from "react-icons/ri";
import { FaDartLang } from "react-icons/fa6";

import SingleSkill from "./SingleSkill";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Flutter", icon: BiLogoFlutter },
  { skill: "Tailwind CSS", icon: RiTailwindCssFill },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "MySQL", icon: SiMysql },
  { skill: "Firebase", icon: IoLogoFirebase },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "Java", icon: FaJava },
  { skill: "Python", icon: FaPython },
  { skill: "Dart", icon: FaDartLang },
  { skill: "Git", icon: FaGitAlt },
  { skill: "Figma", icon: FaFigma },
];

const softSkills = [
  { skill: "Teamwork", icon: RiTeamFill },
  { skill: "Communication", icon: RiUserCommunityFill },
  { skill: "Problem Solving", icon: FaLightbulb },
  { skill: "Collaboration", icon: FaHandsHelping },
];

const AllSkills = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-16 px-4">
      
      {/* Technical Skills Section */}
      <div className="w-full max-w-7xl">
        <div className="mb-6 flex items-center gap-4">
          <FaTools className="text-mutedGold text-4xl" />
          <h2 className="text-4xl sm:text-5xl text-mutedGold">Technical Skills</h2>
        </div>
        <p className="text-lg text-ivory mb-8">
          These are the tools and technologies I use to build amazing projects.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((item, index) => (
            <SingleSkill
              key={index}
              text={item.skill}
              imgSvg={<item.icon className="w-14 h-14 text-gold" />}
            />
          ))}
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="w-full max-w-4xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <RiTeamFill className="text-mutedGold text-4xl" />
          <h2 className="text-3xl sm:text-4xl text-mutedGold">Soft Skills</h2>
        </div>
        <p className="text-lg text-ivory mb-6">
          These are the interpersonal skills that help me collaborate and succeed in team environments.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
          {softSkills.map((item, index) => (
            <SingleSkill
              key={index}
              text={item.skill}
              imgSvg={<item.icon className="w-12 h-12 text-gold" />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
