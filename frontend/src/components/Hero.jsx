import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image"> </div>
      <div className="hero-text">
        <h1>
          <span className="fontawesome-star star"></span>{" "}
          <span>FlickStick</span>{" "}
          <span className="fontawesome-star star"></span>
        </h1>
        <h3>Your movie watchlist</h3>
      </div>
    </section>
  );
}

export default Hero;
