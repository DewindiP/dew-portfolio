import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import { PiPentagonThin } from "react-icons/pi";
import { LiaCircleSolid } from "react-icons/lia";

const Heropic = () => {
  return (
    <div className="h-full flex items-center justify-center  mt-[0px]">
        <img src="../../images/myprofile.png" 
         alt="Pramodi Dewindi"
         className="max-h-[350px] w-auto"
        />
        <div className="absolute -z-10 flex justify-center items-center animate-pulse">
            <LiaCircleSolid className="md:h-[90%] sm:h-[200%] min-h-[550px] w-auto text-mutedGold blur-md animate-[spin_20s_linear_infinte]"/>
        </div>
    </div>
  )
}

export default Heropic