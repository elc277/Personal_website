import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <h1 className="not-found-title">Error 404</h1>
      <p className="not-found-text">Sorry, this page doesn't exist.</p>
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
