import React, {useState, useEffect}from "react";
import "./PhotoCollage.css";


function PhotoCollage(props) {
  
  return (
    <> <div className="carousel carousel-slider">
        <div className="carousel-item" href="#one!">
          <img
            className="img-item"
            src={require("../../../img/foto_1.jpeg")}
            alt="image not found"
          />
        </div>
        <div className="carousel-item" href="#two!">
          <img
            className="img-item"
            src={require("../../../img/foto_2.jpeg")}
            alt="image not found"
          />
        </div>
        <div className="carousel-item green white-text" href="#three!">
          <img
            className="img-item"
            src={require("../../../img/foto_3.jpg")}
            alt="image not found"
          />
        </div>
        <div className="carousel-item blue white-text" href="#four!">
          <img
            className="img-item"
            src={require("../../../img/foto_4.jpeg")}
            alt="image not found"
          />
        </div>
      </div>
    </>
  );
}

export default PhotoCollage;
