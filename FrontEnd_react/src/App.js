import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
import { Link } from "react-router-dom";
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
const mlResponse="hello";

const App = () => {

  

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [mlResponse, setMLResponse] = useState("nothing");


  useEffect(() => {
    searchMovies("john wick");
    fetchMLData();
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const fetchMLData = async () => {
    try {
      
      const mlResponse = await fetch("/api/ml");
      const mlData = await mlResponse.json();
      setMLResponse(mlData.location); // Assuming that the response has a "location" property
    } catch (error) {
      console.error("Error fetching ML data:", error);
    }
  };

  return (

    <div className="app">
      <h1>Jet Via Lens</h1>
      <p>output: {mlResponse}</p>
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
        <div className="container">
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