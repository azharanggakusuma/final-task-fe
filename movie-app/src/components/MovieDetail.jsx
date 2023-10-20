import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieDetail({ match }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieId = match.params.id;
    const apiKey = "efd42c0dec4962480c31d64eed84eb7f";
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details: ", error);
      });
  }, [match.params.id]);

  return (
    <div>
      {movie ? (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-semibold mb-4">{movie.title}</h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-gray-500">
                Genres: {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="text-gray-500">
                Release Date: {movie.release_date}
              </p>
              <p className="text-gray-500">Overview: {movie.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetail;
