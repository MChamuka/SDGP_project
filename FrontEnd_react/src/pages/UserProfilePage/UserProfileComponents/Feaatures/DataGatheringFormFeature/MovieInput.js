// components/MovieInput.js
import React from 'react';

const MovieInput = ({ label, name, value, onChange }) => {
  return (
    <div className="movie-input">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default MovieInput;