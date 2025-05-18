import React from 'react';
import { FaTools, FaUserFriends } from 'react-icons/fa';

const SkillsText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center gap-8">
      {/* Technical Skills Section */}
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-4 mb-4">
          <FaTools className="text-mutedGold text-4xl" />
          <h2 className="text-5xl text-mutedGold">Technical Skills</h2>
        </div>
        <p className="text-lg text-ivory">
          These are the tools and technologies I use to build amazing projects.
        </p>
      </div>

      {/* Soft Skills Section */}
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-4 mb-4">
          <FaUserFriends className="text-mutedGold text-4xl" />
          <h2 className="text-5xl text-mutedGold">Soft Skills</h2>
        </div>
        <p className="text-lg text-ivory">
          These are the interpersonal skills that help me collaborate and succeed in team environments.
        </p>
      </div>
    </div>
  );
};

export default SkillsText;