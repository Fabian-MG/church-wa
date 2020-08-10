import React from "react";
import { Link } from "react-router-dom";

import "./floating-card.styles.scss";

const FloatingCard = ({ background }) => {
  return (
    <div
      className="floating-card-container"
      style={{ background: `${background}` }}
    >
      <div className="card-container">
        <h1 className="card-title">
          Se parte de una <span className="sub">familia</span> a traves de
          nuestros difirentes ministerios
        </h1>
        <p className="card-description">
          Church is great, but don’t let the experience end when the service
          does. Our ministries meet in small groups outside of weekly services
          for fun activities, community service and group Bible discussions.
        </p>
        <Link to="/ministerios" className="card-btn">
          Conócelos
          <span>
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
            </svg>
          </span>
        </Link>
      </div>

      <div className="image-container">
        <div className="background-image" />
      </div>
    </div>
  );
};

export default FloatingCard;
