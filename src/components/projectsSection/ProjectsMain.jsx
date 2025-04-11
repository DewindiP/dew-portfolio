import React from 'react'
import ProjectsText from './ProjectsText';
import SingleProject from './SingleProject';
import { image } from 'framer-motion/client';

const project = [
{
    name:"SEYONI",
    year:"Oct 2024",
    align:"right",
    image:"../images/Seyoni.jpg",
    link:"#",
},
{
    name:"HUNGRY CHEF",
    year:"Oct 2023",
    align:"left",
    image:"../images/hungry-chef.png",
    link:"#",
},
{
    name:"MUSIC PLAYER",
    year:"Oct2024",
    align:"right",
    image:"../images/music-player.png",
    link:"#",
},
{
    name:"SEYONI",
    year:"Oct2024",
    align:"left",
    image:"../images/Seyoni.jpg",
    link:"#",
},
]

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
        <ProjectsText />
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            {project.map((item, index) => {
            return (
                <SingleProject 
                  key={index} 
                  name={item.name} 
                  year={item.year} 
                  align={item.align} 
                  image={item.image} />
            )})}
        </div>
    </div>
  )
}

export default ProjectsMain;