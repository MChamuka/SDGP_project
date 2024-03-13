// components/MovieForm.js
import React, { useState } from 'react';
import MovieInput from './MovieInput';
import './MovieForm.css'; // Import CSS file for styling

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
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <MovieInput
        label="Movie Name"
        name="movieName"
        value={formData.movieName}
        onChange={handleChange}
      />
      <MovieInput
        label="Movie Scene"
        name="movieScene"
        value={formData.movieScene}
        onChange={handleChange}
      />
      <MovieInput
        label="Movie Location"
        name="movieLocation"
        value={formData.movieLocation}
        onChange={handleChange}
      />
      <MovieInput
        label="Movie Genre"
        name="movieGenre"
        value={formData.movieGenre}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieForm;