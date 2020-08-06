import React from "react";

import sliderImages from "../slider-images";

import "./slide.styles.scss";
import { Link } from "react-router-dom";

const Slide = ({ currentIndex }) => {
  const { imageUrl, title, description, button } = sliderImages[currentIndex];

  return (
    <div className="Slide">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="description-container">
          <h1 className="title"> {title} </h1>
          <p className="description">{description} </p>
        </div>
        <Link className="slide-button" to='/'>
          {button}
          <span>
            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"/></svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
