import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css'

function Contact() {
    const [state, handleSubmit] = useForm("mvoyjebj");
  if (state.succeeded) {
      return <p>Thanks for messge! One of our team members will get back to you as soon as possible</p>;
  }
  return (
    <div className="form-div">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
            Name
        </label>
        <input 
        id="name"
        type="text"
        name="name"
        />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea       id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  )
};

export default Contact;
