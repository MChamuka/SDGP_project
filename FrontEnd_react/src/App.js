import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Navbar from "./pages/navbar";
import SearchIcon from "./search.svg";

import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";


// import Spline from "@splinetool/react-spline";
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
const mlResponse = "hello";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [mlResponse, setMLResponse] = useState("nothing");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Adventure");
  }, []);

  // On movie selection
  const movieClick = (event) => {

    //getting clicked componenet details
    const clickedMovieID = event.target.getAttribute('alt');
    const clickedMovieTitle = event.target.getAttribute('title');

    const movieData = { 
      ID: clickedMovieID,
      Title: clickedMovieTitle
    };
    console.log(clickedMovieID);

    axios.post("http://localhost:4000/locations", movieData)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
    window.location.href = "/locations";
  };
  const myFunction = () =>{
    var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  }
  

  return (  
    <div className="app">
      <Navbar/>
      <h1>JetViaLense</h1>
      {/* <ul class="topnav" id="myTopnav">
        <li><Link to ="/App">Search</Link></li>
        <li><Link to ="/profile">Profile</Link></li>
        <li><Link to ="/locations">Locations</Link></li>
        <li><Link to ="/form">Submit</Link></li>
        <li><Link to ="/signUp">Login</Link></li>
      </ul> */}
      {/* <div className="spline-container">
        <Spline scene="https://prod.spline.design/dMGhdK3UFxg4Z7n7/scene.splinecode"/>
      </div> */}
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container"  onClick={movieClick}>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found, but here are a list of recommended movies</h2>
        </div>
      )}
    </div>
    
  );
};

export default App;
