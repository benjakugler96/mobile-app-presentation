import React from "react";
import "./Contact.css";
import ContactForm from "../../containers/ContactForm";

const Contact = () => {
  return (
    <section className='contact-container flex'>
      <div className='contact-title'>Contact</div>
      <ContactForm />
      <div className='contact-button'></div>
    </section>
  );
};

export default Contact;
