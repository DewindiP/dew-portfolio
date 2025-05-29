import React from 'react'
import ProjectsText from './ProjectsText';
import SingleProject from './SingleProject';
import { FaGithub } from "react-icons/fa";
import { image } from 'framer-motion/client';

const project = [
{
    name:"SEYONI",
    year:"Oct 2024",
    align:"right",
    image:"../images/Seyoni.jpg",
    link:"#",
    githublink: "https://github.com/DewindiP/Seyoni",
},
{
    name:"CINESCOPE",
    year:"APRIL 2025",
    align:"left",
    image:"../images/cinescope.png",
    link:"https://cinescopemoviesex.netlify.app/",
    githublink:"https://github.com/DewindiP/movie-explorer",
},
{
    name:"MUSIC PLAYER",
    year:"Oct 2024",
    align:"right",
    image:"../images/music-player.png",
    link:"https://dewindip.github.io/Music-Player/",
    githublink:"https://github.com/DewindiP/Music-Player",
},
{
    name:"HUNGRY CHEF",
    year:"Oct 2023",
    align:"left",
    image:"../images/hungry-chef.png",
    link:"https://dewindip.github.io/Hungry-Chef/",
    githublink:"https://github.com/DewindiP/Hungry-Chef",
},
{
    name:"TO-DO LIST",
    year:" Dec 2023",
    align:"right",
    image:"../images/todo.png",
    link:"https://dewindip.github.io/To-Do-List/",
    githublink:"https://github.com/DewindiP/To-Do-List",
},
{
    name:"CALCULATOR",
    year:"Nov 2023",
    align:"left",
    image:"../images/cal.png",
    link:"https://dewindip.github.io/simple-calculator/",
    githublink:"https://github.com/DewindiP/simple-calculator",
},
]

const ProjectsMain = () => {
  return (
    <div 
    id="projects" 
    className="max-w-[1200px] mx-auto px-4">
        <ProjectsText />
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            {project.map((item, index) => {
            return (
                <SingleProject 
                  key={index} 
                  name={item.name} 
                  year={item.year} 
                  align={item.align} 
                  image={item.image}
                  link={item.link}
                  githublink={item.githublink} />
            )})}
        </div>
    </div>
  )
}

export default ProjectsMain;