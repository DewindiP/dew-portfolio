import React from 'react'

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex gap-6 text-ivory fond-semibold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text=md sm:text-xl sm:bg-deepForestGreen/30 backdrop-blur-3xl lg:bg-deepForestGreen sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <a href="#" className="cursor-pointer text-ivory hover:text-mutedGold transition-all duration-500">
              {link.link}
            </a>
            <div className="mx-auto bg-mutedGold w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  )
}

export default NavbarLinks