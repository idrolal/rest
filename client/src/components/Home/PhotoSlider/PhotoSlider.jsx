import React from 'react';
import "./PhotoSlider.css";

function PhotoSlider(props) {
  return (
    <>
    <div className="carousel carousel-slider">
      <div className="carousel-item" href="#one!">
        <img
          className="img-item"
          src={require("../../../img/les.jpeg")}
          alt="image not found"
        />
      </div>
      <div className="carousel-item" href="#two!">
        <img
          className="img-item"
          src={require("../../../img/les2.jpeg")}
          alt="image not found"
        />
      </div>
      <div className="carousel-item green white-text" href="#three!">
        <img
          className="img-item"
          src={require("../../../img/les3.jpeg")}
          alt="image not found"
        />
      </div>

    </div>
  </>
  );
}

export default PhotoSlider;
