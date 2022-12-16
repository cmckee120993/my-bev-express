import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css'

import sixPack from '../assets/images/bx-six-pack.png';

function Contact() {
    const [state, handleSubmit] = useForm("mvoyjebj");
  if (state.succeeded) {
      return <p>Thanks for messge! One of our team members will get back to you as soon as possible</p>;
  }
  return (
    <div className="form-div">
      <div className="contact-title-div">
      <h2 className="contact-title">Contact Us!</h2> 
      <img className="contact-header-image" src={sixPack} alt="Beverage Express Six Pack Logo"/>
      </div>
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
      <label htmlFor="message">
        Your Message
      </label>
      <textarea       id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="contact-submit" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  )
};

export default Contact;
