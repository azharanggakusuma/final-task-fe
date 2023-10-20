/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react';
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import MovieList from './components/MovieList';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="mt-20 lg:mt-96 mb-10">
        <MovieList />
      </div>
      <Footer />
    </div>
  );
}

export default App;