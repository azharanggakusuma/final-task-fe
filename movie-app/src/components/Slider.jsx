/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "../assets/img/banner-1.png";
import { useLocation } from "react-router-dom";

const images = [Banner1, Banner1, Banner1];

function Slider() {
  const location = useLocation();

  // Periksa apakah kita berada di halaman detail
  const isDetailPage = location.pathname.includes("/movie/");

  // Jika berada di halaman detail, kita akan menyembunyikan slider
  if (isDetailPage) {
    return null;
  }
  return (
    <div className="slider mx-auto max-w-screen-xl">
      <div className="h-[20vh] sm:h-[50vh] md:h-[20vh] lg:h-[30vh] xl:h-[20vh]">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
