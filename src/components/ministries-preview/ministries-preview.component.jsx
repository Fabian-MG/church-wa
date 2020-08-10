import React from "react";

import "./ministries-preview.styles.scss";

const ministries = [
  {
    imageUrl:
      "https://images.pexels.com/photos/1187086/pexels-photo-1187086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    title: "Jóvenes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Nohemis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Niños",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

const MinistriesPreview = () => {
  return (
    <div className="ministries-preview-container">
      {ministries.map(({ imageUrl, title, description }) => (
        <div className="container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button> Ver más </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MinistriesPreview;
