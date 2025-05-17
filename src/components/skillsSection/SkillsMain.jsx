import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'


const SkillsMain = () => {
  return (
    <div 
      id="skills"
      className="flex flex-col text-left items-center mt-[10px]">
        <SkillsText />
        <AllSkills />
    </div>
  );
};

export default SkillsMain;