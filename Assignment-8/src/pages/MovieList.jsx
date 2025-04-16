import React from 'react';
import { useNavigate } from 'react-router-dom';
import movies from '../data/movies';
import './styles.css';

const MovieList = () => {
  const navigate = useNavigate();

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
