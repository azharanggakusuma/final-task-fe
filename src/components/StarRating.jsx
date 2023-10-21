/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 !== 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon icon={faStar} key={i} className="text-yellow-500" /> 
    );
  }

  if (hasHalfStar) {
    stars.push(
      <FontAwesomeIcon
        icon={faStarHalfAlt}
        key="half"
        className="text-yellow-500"
      />
    );
  }

  while (stars.length < 5) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        key={stars.length}
        className="text-gray-300"
      />
    );
  }

  return (
    <div className="flex space-x-1">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

export default StarRating;
