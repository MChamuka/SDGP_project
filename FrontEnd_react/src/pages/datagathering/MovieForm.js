// MovieForm.jsx

import React, { useState } from 'react';
import './MovieForm.css';

const MovieForm = () => {
  const [formData, setFormData] = useState({
    movieName: '',
    movieScene: '',
    movieLocation: '',
    movieGenre: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here
  };

  const handleGoBack = () => {
    // Define the logic to go back
    console.log('Going back...');
  };

  return (
    <div className='body'>
        <div className="movie-form-container">
        <button className="back-button" onClick={handleGoBack}>Back</button>
          <form onSubmit={handleSubmit}>
            <h1>Data Gathering Form</h1>
            <div className="form-group">
              <label htmlFor="movieName">Movie Name</label>
              <input
                type="text"
                id="movieName"
                name="movieName"
                value={formData.movieName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="movieScene">Movie Scene</label>
              <input
                type="text"
                id="movieScene"
                name="movieScene"
                value={formData.movieScene}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="movieLocation">Movie Location</label>
              <input
                type="text"
                id="movieLocation"
                name="movieLocation"
                value={formData.movieLocation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="movieGenre">Movie Genre</label>
              <input
                type="text"
                id="movieGenre"
                name="movieGenre"
                value={formData.movieGenre}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
      </div>
    </div>
  );
};

export default MovieForm;