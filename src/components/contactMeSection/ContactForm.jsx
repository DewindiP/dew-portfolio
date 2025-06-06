import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const ContactForm = () => {
  return (
    <div className="w-full px-2 sm:px-4 md:px-0 py-6 flex justify-center">
        <form className="flex flex-col gap-4 p-2.5 ">
            <input 
             type="text" 
             placeholder="Your Name" 
             className="h-12 rounded-lg p-2 bg-oliveGreen text-sageTintedOlive" required />
            <input 
             type="email" 
             placeholder="Your Email" 
             className="h-12 rounded-lg p-2 bg-oliveGreen text-sageTintedOlive" required />
            <textarea 
              type="text" 
              placeholder="Message" 
              rows="9" 
              cols="50" 
              className="rounded-lg p-2 bg-oliveGreen text-sageTintedOlive" required/>
            <button type="submmit" className="w-full border border-richMetallicGold rounded-lg text-softSage font-semibold text-xl p-2 hover:bg-warmOliveTint transition-all duration-500 cursor-pointer  hover:text-deepForestGreen hover:font-semibold">Send</button>
        </form>
    </div>
  );
};

export default ContactForm;