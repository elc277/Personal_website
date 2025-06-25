import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Projects',
      emoji: '📁',
      summary: 'Check out some cool AI & web projects I’ve built.',
      path: '/projects',
    },
    {
      title: 'Skills',
      emoji: '📖',
      summary: 'Find out more about the skills I have.',
      path: '/skills',
    },
    {
      title: 'Contact',
      emoji: '✉️',
      summary: 'Let’s get in touch! Email or message me.',
      path: '/contact',
    },
  ];
  

  return (
    <div className="homepage">
      <h1 className="intro-title">Hi, I'm Luca <span role="img" aria-label="wave">👋</span></h1>

      <div className="about-container">
        <div className="profile-pic-box">
          <img
            src="/luca.jpg"
            alt="Luca"
            className="profile-pic"
          />
        </div>

        <div className="about-text-box">
          <p className="about-text">
            I am a third-year Artificial Intelligence student at Vrije Universiteit Amsterdam. I am passionate about programming, problem-solving, and teamwork. I am ambitious and always looking for new opportunities to improve myself. I have worked with various programming languages and technologies and enjoy being part of innovative projects. My experience spans both academic and personal projects, and I am always ready to learn and take on new challenges.
          </p>
        </div>
      </div>

      <div className="card-grid">
        {cards.map((card, index) => (
          <div
          key={index}
          className="hover-card"
          onClick={() => navigate(card.path)}
        >
          <h2 className="card-title">{card.title}</h2>
          <div className="card-emoji" role="img" aria-label={card.title}>
            {card.emoji}
          </div>
          <p className="hover-summary">{card.summary}</p>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default HomePage;
