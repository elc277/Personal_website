import React from 'react';
import './ContactPage.css';
import BackButton from '../components/BackButton';
import { FaLinkedin, FaEnvelope} from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="section-title">Contact</h1>

      <p className="contact-text">
        Want to work together or just say hi?
      </p>

      <div className="contact-block">
        <FaEnvelope className="contact-icon" />
        <a
          href="mailto:lucas.eftimie@gmail.com"
          className="contact-link"
        >
          lucas.eftimie@gmail.com
        </a>
      </div>

      <div className="linkedin-block">
        <FaLinkedin className="linkedin-icon" />
        <a
          href="https://www.linkedin.com/in/luca-cristian-eftimie/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          linkedin.com/in/luca-cristian-eftimie
        </a>
      </div>

      <p className="location">
        <span role="img" aria-label="location">📍</span> Amsterdam, Netherlands
      </p>

      <BackButton />
    </div>
    
  );
};

export default ContactPage;
