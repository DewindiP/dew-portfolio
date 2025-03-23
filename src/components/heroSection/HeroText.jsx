import React from 'react'

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
        <h2 className="lg:text-2xl sm:text-xl text-mutedGold">
            Front-End Web Developer</h2>
        <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-warmOliveTint">Pramodi Dewindi</h1>
        <p className="text-lg mt-4 text-warmBeige">
            A Passionate Web Developer with a keen interest in <br/>developing responsive websites and web applications.
        </p>
    </div>
  );
};

export default HeroText