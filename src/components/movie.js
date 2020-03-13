import React from "react";

const Movie = ({ movie }) => {
  const poster =  movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <li key={movie.imdbID} onClick={() => Movie.clicked(movie)}>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
      </li>
      <div>

      </div>
    </div>
  );
};export default Movie;