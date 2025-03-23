import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'

const SkillsMain = () => {
  return (
    <div className="flex flex-col text-left items-center mt-[150px]">
        <SkillsText />
        <AllSkills />
    </div>
  );
};

export default SkillsMain;