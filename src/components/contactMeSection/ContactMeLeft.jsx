import React from 'react'
import ContactForm from './ContactForm';

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <div>
            <h2 className="text-oliveGreen text-3xl mb-4">Get In Touch</h2>
            <p className="text-ivory font-light">Let’s create something amazing together! 
                <br />Reach out-you're just a few clicks away!
            </p>
        </div>
        <ContactForm />
    </div>
  );
};

export default ContactMeLeft;