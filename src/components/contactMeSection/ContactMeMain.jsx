import React from 'react';
import ContactMeRight from './ContactMeRight';
import ContactMeLeft from './ContactMeLeft';

const ContactMeMain = () => {
  return (
    <div 
    id="contact"
    className="max-w-[1200px] mx-auto items-center justify-center mt-[50px] px-4">
        <h2 className="text-6xl text-mutedGold mb-10 text-center">Contact Me</h2>
        <div className="flex justify-between gap-24 p-8 bg-richBlackGreen rounded-xl lg:flex-row sm:flex-col ">
            <ContactMeLeft />
            <ContactMeRight />
        </div>
    </div>
  );
};

export default ContactMeMain;