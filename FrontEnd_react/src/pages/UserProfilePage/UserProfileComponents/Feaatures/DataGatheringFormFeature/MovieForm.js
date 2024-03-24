import React, { useState, useEffect } from 'react';
import './MovieForm.css';
import axios from 'axios';


const MovieForm = () => {

  const [movieTitle, setMovieTitle] = useState();

  const fetchTitle = async() => {
    const response = await fetch('http://localhost:4000/locations');
    const data = await response.json()
    setMovieTitle(data[0].movieTitle)
  }

  useEffect(() => {
    fetchTitle()
  }, [])

  const [formData, setFormData] = useState({
    movieName: movieTitle,
    movieScene: [''],
    movieLocation: [''],
    voteCounts: [0]
  });

  const handleChange = (e) => {
    fetchTitle()
    console.log(movieTitle);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      movieName: movieTitle,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here
    axios.post("http://localhost:4000/crowdData", formData)
      .then(response => {
        console.log(response)
        window.location.href = "locations"
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleGoBack = () => {
    window.location.href = '/locations'    
  };

  return (
    <div className='body'>
        <div className="movie-form-container">
        <button className="back-button" onClick={handleGoBack}>Back</button>
          <form onSubmit={handleSubmit}>
            <h1 className='title2'>JetSource Request</h1>
            <h4>Submit locations you know in</h4>
            <div className="form-group">
              <h2 className='title2'>{movieTitle}</h2>
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
            {/* <div className="form-group">
              <label htmlFor="movieGenre">Movie Genre</label>
              <input
                type="text"
                id="movieGenre"
                name="movieGenre"
                value={formData.movieGenre}
                onChange={handleChange}
                required
              />
            </div> */}
            <button type="submit">Submit</button>
          </form>
      </div>
    </div>
  );
};

export default MovieForm;