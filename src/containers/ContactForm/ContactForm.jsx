import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [comment, setComment] = useState();

  const onSubmit = event => {
    event.preventDefault();
    //Handle here what you are going to do when users click on the submit button..

  };

  return (
    <form onSubmit={onSubmit} className='contact-form flex-column'>
      <label className='flex-column'>
        E-mail adress:
        <input
          type='text'
          placeholder='sample@yourdomain.com'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <label className='flex-column'>
        Subject:
        <input
          type='text'
          placeholder='Subject'
          value={subject}
          onChange={event => setSubject(event.target.value)}
        />
      </label>
      <label className='flex-column'>
        Message:
        <textarea
          placeholder='Details about what you want to know...'
          value={comment}
          onChange={event => setComment(event.target.value)}
          rows="4"
        />
      </label>

      <input type='submit' value='Submit' />
    </form>
  );
};
export default ContactForm;
