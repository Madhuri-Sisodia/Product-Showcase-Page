import React, { useState } from "react";
import "./ShopSection.css";
import shoesData from "../shoesData.json";

const ShoeCard = ({ shoe, openModal }) => {
  const [currentImage, setCurrentImage] = useState(shoe.colorways[0].image);
  const [currentName, setCurrentName] = useState(shoe.name);

  const getImagePath = (imageName) => {
    return `${process.env.PUBLIC_URL}/${imageName}`;
  };

  return (
    <div className="shoe-card" onClick={() => openModal(shoe)}>
      <img
        style={{
          width: "50px",
          height: "50px",
        }}
        src={getImagePath(currentImage)}
        alt={currentName}
        className="main-image"
      />
      <h3>{currentName}</h3>
      <p>${shoe.price}</p>
      <div className="colorways">
        {shoe.colorways.map((colorway, colorIndex) => (
          <img
            style={{
              width: "50px",
              height: "50px",
            }}
            key={colorIndex}
            src={getImagePath(colorway.image)}
            alt={colorway.color}
            className="colorway-thumbnail"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage(colorway.image);
              setCurrentName(`${shoe.name} - ${colorway.color}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

const ShopSection = ({ openModal }) => {
  return (
    <section className="shop" id="shop">
      <div className="shoe-grid">
        {shoesData?.shoes?.map((shoe, index) => (
          <ShoeCard key={index} shoe={shoe} openModal={openModal} />
        ))}
      </div>
    </section>
  );
};

export default ShopSection;
