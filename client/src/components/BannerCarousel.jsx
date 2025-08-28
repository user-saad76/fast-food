import React from "react";
import BannerFirst from "../assets/banner-burger.jpg"
import  BannerSecond from "../assets/pizza-banner.jpg"
import  BannerThird from "../assets/fries-banner.jpeg"
function BannerCarousel() {
  return (
    <div
      id="bannerCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // slides every 3 seconds
    >
      {/* Indicators (dots) */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src= {BannerFirst}
            className="d-block w-100"
            alt="Food Banner"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="fw-bold">Welcome to FastBite 🍔</h2>
            <p>Fresh, hot, and made with love!</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src= { BannerSecond}
            className="d-block w-100"
            alt="Burger Banner"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="fw-bold">Tasty Burgers</h2>
            <p>Juicy and grilled to perfection.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src= {BannerThird}
            className="d-block w-100"
            alt="Order Banner"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="fw-bold">Order Online 🚀</h2>
            <p>Get your food delivered fast and fresh.</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default BannerCarousel;
