import React from "react";

import "./section.styles.scss";

const Section = () => {
  return (
    <div className="section-container">
      <div className="content-container">
        <h1>
          {" "}
    
          Lorem Ipsum Dolor Sit Amet{" "}
         
        </h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <button>Conoce más</button>
      </div>
      <div className="video-container">
        <iframe
          className='video'
          title='video'
          src="https://www.youtube.com/embed/g_W9af_CQDs"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Section;
