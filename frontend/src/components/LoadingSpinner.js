import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner" />
    </div>
  );
};

export default LoadingSpinner;