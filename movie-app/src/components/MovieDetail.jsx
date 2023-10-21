/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "./Container";
import StarRating from "./StarRating";

function formatBudget(budget) {
  if (budget >= 1000000) {
    return `${(budget / 1000000).toFixed(2)} million USD`;
  } else {
    return `${budget} USD`;
  }
}

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    async function fetchMovieDetail() {
      try {
        const apiKey = "efd42c0dec4962480c31d64eed84eb7f"; 
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );

        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie detail: ", error);
      }
    }

    async function fetchCharacters() {
      try {
        const apiKey = "efd42c0dec4962480c31d64eed84eb7f"; 
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
        );

        setCharacters(response.data.cast);
      } catch (error) {
        console.error("Error fetching characters: ", error);
      }
    }

    async function fetchReviews() {
      try {
        const apiKey = "efd42c0dec4962480c31d64eed84eb7f";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US`
        );

        setReviews(response.data.results);
      } catch (error) {
        console.error("Error fetching reviews: ", error);
      }
    }

    fetchMovieDetail();
    fetchCharacters();
    fetchReviews();
  }, [id]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!movie) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="lg:-mt-96">
      {/* Banner */}
      <div
        className="bg-black text-white py-16 px-4"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto flex items-center">
          <div className="ml-8">
            <h1 className="text-4xl font-black">{movie.title}</h1>
            <div className="flex items-center mt-4">
              <div className="mr-4">
                <StarRating rating={movie.vote_average} />
              </div>
              <div>
                <span className="text-xl">{movie.vote_count} Review</span>
              </div>
            </div>
            <p className="mt-4 text-xl">{movie.overview}</p>
            <div className="mt-8">
              <button className="bg-primary hover:bg-secondary transition duration-300 ease-in-out rounded-md text-white px-4 py-2 mr-4">
                Watch Trailer
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 transition duration-300 ease-in-out rounded-md text-gray-900 px-4 py-2">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-20">
        <Container>
          <div className="flex space-x-4">
            <button
              onClick={() => handleTabClick("overview")}
              className={`${
                activeTab === "overview"
                  ? "bg-secondary text-white hover:bg-primary transition duration-300 ease-in-out"
                  : "bg-gray-300 text-gray-600 hover:bg-gray-400 transition duration-300 ease-in-out"
              } py-2 px-4 rounded cursor-pointer`}
            >
              Overview
            </button>
            <button
              onClick={() => handleTabClick("character")}
              className={`${
                activeTab === "character"
                  ? "bg-secondary text-white hover:bg-primary transition duration-300 ease-in-out"
                  : "bg-gray-300 text-gray-600 hover:bg-gray-400 transition duration-300 ease-in-out"
              } py-2 px-4 rounded cursor-pointer`}
            >
              Character
            </button>
            <button
              onClick={() => handleTabClick("review")}
              className={`${
                activeTab === "review"
                  ? "bg-secondary text-white hover:bg-primary transition duration-300 ease-in-out"
                  : "bg-gray-300 text-gray-600 hover:bg-gray-400 transition duration-300 ease-in-out"
              } py-2 px-4 rounded cursor-pointer`}
            >
              Review
            </button>
          </div>
        </Container>
      </div>
      {activeTab === "overview" && (
        <Container>
          <h2 className="text-2xl font-bold mt-10">Synopsis</h2>
          <p className="text-gray-700 mt-2">
            {movie.overview || (
              <span style={{ color: "red" }}>Data not available</span>
            )}
          </p>

          <h2 className="text-2xl font-bold mt-4 mb-2">Movie Info</h2>
          <p>
            <strong>Release date:</strong>{" "}
            {movie.release_date || (
              <span style={{ color: "red" }}>Data not available</span>
            )}
          </p>
          <p>
            <strong>Director:</strong>{" "}
            {movie.director || (
              <span style={{ color: "red" }}>Data not available</span>
            )}
          </p>
          <p>
            <strong>Featured song:</strong>{" "}
            {movie.featured_song || (
              <span style={{ color: "red" }}>Data not available</span>
            )}
          </p>
          <p>
            <p>
              <strong>Budget:</strong>{" "}
              {movie.budget ? (
                formatBudget(movie.budget)
              ) : (
                <span style={{ color: "red" }}>Data not available</span>
              )}
            </p>
          </p>
        </Container>
      )}
      {activeTab === "character" && (
        <Container>
          <h2 className="text-2xl font-bold mb-2 mt-10">Character</h2>
          <ul>
            {characters.length > 0 && (
              <div>
                <ul>
                  {characters.map((character) => (
                    <li key={character.id} className="mb-2">
                      <strong>{character.name}</strong> - {character.character}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {characters.length === 0 && <p>No characters available.</p>}
          </ul>
        </Container>
      )}
      {activeTab === "review" && (
        <Container>
          <h2 className="text-2xl font-bold mb-2 mt-10">Reviews</h2>
          <ul>
            {reviews.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold">Review</h2>
                <ul>
                  {reviews.map((review) => (
                    <li key={review.id} className="mb-2">
                      <strong>{review.author}:</strong> {review.content}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {reviews.length === 0 && <p>No reviews available.</p>}
          </ul>
        </Container>
      )}
    </div>
  );
}

export default MovieDetail;
