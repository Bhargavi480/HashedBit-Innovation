import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div className="movie-details">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;
