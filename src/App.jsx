/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div>
        <Navbar onSearchQueryChange={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home({ searchQuery }) {
  return (
    <>
      <Slider />
      <div className="mt-20 lg:mt-96 mb-10">
        <MovieList searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default App;
