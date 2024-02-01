import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from './Photo';
import './App.css';
import config from './config.json';

const App = () => {
  const apiUrl = config.API_URL;
  const [photos, setPhotos] = useState([]);
  
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/photos`);
        setPhotos(response.data.photos);
        console.log(response.data.photos)
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, [apiUrl]);

  return (
    <div className="app">
      <h1>Photo Gallery</h1>
      <div className="photo-list">
        {photos.map((photo, index) => (
          <Photo key={index} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default App;
