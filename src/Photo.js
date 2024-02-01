import React from 'react';
import './Photo.css';

const Photo = ({ photo }) => {
  return (
    <div className="photo-card">
      <img className="photo-item" src={photo} alt={photo} />
    </div>
  );
};

export default Photo;
