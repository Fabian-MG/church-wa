import React from "react";

import sliderImages from "../slider-images";

import './slide.styles.scss'

const Slide = ({ currentIndex }) => {
  return (
    <div className="Slide">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${sliderImages[currentIndex]})` }}
      />
    </div>
  );
};

export default Slide;
