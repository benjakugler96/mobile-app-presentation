import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const onSubmit = () => console.log(email, subject);
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [comment, setComment] = useState();

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
        <input
          type='text'
          placeholder='Details about what you want to know...'
          value={comment}
          onChange={event => setComment(event.target.value)}
        />
      </label>

      <input type='submit' value='Submit' />
    </form>
  );
};
export default ContactForm;
