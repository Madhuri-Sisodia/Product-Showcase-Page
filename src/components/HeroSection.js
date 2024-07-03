import React from "react";
import "./HeroSection.css";

const HeroSection = ({ showModal }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover the New Shoe Collection</h1>
        <p>
          Explore our latest high-quality shoe designs crafted for comfort and
          style.
        </p>
        {/* <button className="cta-button">Shop Now</button> */}
        <button className="cta-button" onClick={showModal}>
          Learn More
        </button>
      </div>
      <div className="hero-media">
        {/* <img src="public/pexels-craytive-1478442.jpg.jpg" alt="product" /> */}
        <img
          src={process.env.PUBLIC_URL + "/pexels-craytive-1478442.jpg.jpg"}
          alt="product"
        />
      </div>
    </section>
  );
};

export default HeroSection;
