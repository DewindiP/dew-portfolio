import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-medium text-warmBeige border-mutedGold border flex items-center gap-1 bg-gradient-to-r from-mutedGold to-forestGreen hover:border-forestGreen hover:scale-110 transition-all duration-500 hover:shadow-mutedGoldShadow">
        Contact Me
        <LuArrowDownRight />
    </button>
  );
};

export default NavbarBtn