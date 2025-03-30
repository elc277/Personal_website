import React from 'react';
import './ContactPage.css';
import BackButton from '../components/BackButton';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="section-title">Contact</h1>
      <p className="contact-text">
        Want to work together or just say hi?
      </p>
      <a
        href="mailto:lucas.eftimie@gmail.com"
        className="contact-link"
      >
        lucas.eftimie@gmail.com
      </a>
      <p className="location">
        <span role="img" aria-label="location">📍</span> Amsterdam, Netherlands
      </p>
      <BackButton />
    </div>
    
  );
};

export default ContactPage;
