/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function MovieCard({ title, image, genres }) {
  const displayedGenres = genres.slice(0, 3);

  return (
    <div className="container">
      <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
        <img
          src={`https://image.tmdb.org/t/p/w300${image}`}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 h-40 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-500">{displayedGenres.join(", ")}</p>
          </div>
          <button className="bg-secondary text-white py-2 px-4 rounded">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
