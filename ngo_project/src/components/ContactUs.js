import React from 'react';
import './contact.css';
import "./ContactUs.css"
const ContactUs = () => {
  return (
    <div className="contact-us-content">
      <div className="contact-us-form-container">
        <p className="form-heading">Reach out to us!</p>
        <p className="form-sub-heading">
          We would love to hear your suggestions and answer your questions.
        </p>
        <div className="contact-us-form">
          <input className="input-field" type="text" placeholder="First Name" value="" />
          <input className="input-field" type="text" placeholder="Last Name" value="" />
          <input className="input-field" type="tel" maxLength="10" placeholder="Phone Number" value="" />
          <input className="input-field" type="email" placeholder="Email-Id" value="" />
          <input className="input-field address-field" type="text" placeholder="Address" value="" />
          <textarea className="input-field message-field" placeholder="Message"></textarea>
          <button className="button contact-us-button">Submit</button>
        </div>
      </div>
   
    </div>
  );
};

export default ContactUs;
