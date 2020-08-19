import React from "react";

import "./collection-preview.styles.scss";
import { Link } from "react-router-dom";
import CustomLinkButton from "../custom-link-button/custom-link-button.component";

const CollectionPreview = ({ title, imageUrl, inverted }) => {
  return (
    <div
      className={`collection-preview-container ${inverted ? "inverted" : ""}`}
    >
      <div className="content-container">
        <div className="image-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
        <div className="content">
          <h2 className="cp-title">{title}</h2>
          <p className="cp-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <CustomLinkButton title="Saber más" path="" />
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
