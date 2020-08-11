import React, { useState, useEffect } from "react";

import sliderImages from "./slider-images";
import Slide from "./slide/slide.component";
import { ReactComponent as LeftArrow } from "../../assets/leftarrow.svg";
import { ReactComponent as RightArrow } from "../../assets/rigtharrow.svg";
// import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg";

import "./slider.styles.scss";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images] = useState(sliderImages.length);

  useEffect(() => {
    let timeout = setTimeout(() => nextSlide(), 8000);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const nextSlide = () => {
    currentIndex === images - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    currentIndex === 0
      ? setCurrentIndex(images - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="slider-container">
      <div className="arrow-container left">
        <LeftArrow
          style={{ fill: "white" }}
          onClick={() => {
            prevSlide();
          }}
        />
      </div>
      <Slide currentIndex={currentIndex} />
      <div className="arrow-container rigth">
        <RightArrow
          style={{ fill: "white" }}
          onClick={() => {
            nextSlide();
          }}
        />
      </div>
      {/* 
            <div className="down-arrow-container">
        <DownArrow className='down-arrow'/>
      </div>
      */}
    </div>
  );
};

export default Slider;
