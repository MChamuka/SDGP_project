import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
import { Link } from "react-router-dom";

import Spline from "@splinetool/react-spline";
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
const mlResponse = "hello";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [mlResponse, setMLResponse] = useState("nothing");

  useEffect(() => {
    searchMovies("john wick");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  return (
    <div className="app">
      <ul>
        <li>
          <Link to="/App">Main</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>
          <Link to="/location">location</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/signUp">SignUp</Link>
        </li>
      </ul>
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/dMGhdK3UFxg4Z7n7/scene.splinecode" />
      </div>
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
