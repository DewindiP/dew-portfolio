import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const project = [
  {
    name: "SEYONI",
    about:
      "A comprehensive smart workers management system designed to connect service seekerswith skilled service providers.",
    technologies: " Flutter | Node.js | Express.js | MongoDB | AWS | Git",
    year: "Oct 2024",
    align: "right",
    image: "./images/Seyoni.jpg",
    // link: "#",
    githublink: "https://github.com/DewindiP/Seyoni",
  },
  {
    name: "CINESCOPE",
    about:
      "A responsive movie app using TMDB API with features like search, filters, and detailed views.",
    technologies: "React | Tailwind CSS | TMDB API | Git",
    year: "APRIL 2025",
    align: "left",
    image: "./images/cinescope.png",
    link: "https://cinescopemoviesex.netlify.app/",
    githublink: "https://github.com/DewindiP/movie-explorer",
  },
  {
    name: "MUSIC PLAYER",
    about:
      "A responsive movie app using TMDB API with features like search, filters, and detailed views.",
    technologies: "React | Tailwind CSS | TMDB API | Git",
    year: "Oct 2024",
    align: "right",
    image: "./images/music-player.png",
    link: "https://dewindip.github.io/Music-Player/",
    githublink: "https://github.com/DewindiP/Music-Player",
  },
  {
    name: "HUNGRY CHEF",
    year: "Oct 2023",
    align: "left",
    image: "./images/hungry-chef.png",
    link: "https://dewindip.github.io/Hungry-Chef/",
    githublink: "https://github.com/DewindiP/Hungry-Chef",
  },
  {
    name: "TO-DO LIST",
    year: " Dec 2023",
    align: "right",
    image: "/images/todo.png",
    link: "https://dewindip.github.io/To-Do-List/",
    githublink: "https://github.com/DewindiP/To-Do-List",
  },
  {
    name: "CALCULATOR",
    year: "Nov 2023",
    align: "left",
    image: "/images/cal.png",
    link: "https://dewindip.github.io/simple-calculator/",
    githublink: "https://github.com/DewindiP/simple-calculator",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-2">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {project.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              about={item.about}
              technologies={item.technologies}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
              githublink={item.githublink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
