import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className ="flex flex-col gap-4 text-oliveGreen">
        <SingleInfo text="pramodidewindi@gmail.com" Image={HiOutlineMail}/>
        <SingleInfo text="+94 76 5586757" Image={FiPhone}/>
        <SingleInfo text="Elpitiya, Galle, Sri Lanka" Image={IoLocationOutline}/>
    </div>
  );
};

export default ContactInfo;