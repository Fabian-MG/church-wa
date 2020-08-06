import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as FacebookLogo } from "../../assets/facebook-social-logo-svgrepo-com.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter-svgrepo-com.svg";
import { ReactComponent as InstagramLogo } from "../../assets/instagram-svgrepo-com (1).svg";

import "./full-menu.styles.scss";

const sections = [
  { title: "inicio", path: "/" },
  { title: "ministerios", path: "/ministerios" },
  { title: "clases", path: "/clases" },
  { title: "contacto", path: "/contacto" },
  { title: "ofrenda", path: "/ofrenda" },
];
const animation = (idx) => ({
  animation: `navLinkFade 0.5s ease forwards ${idx / 7 + 0.4}s`,
});

const FullMenu = ({ toggle }) => {
  return (
    <div className={`full-menu-container ${toggle ? "active" : null}`}>
      <div className="sections">
        {sections.map(({ title, path }, idx) => (
          <Link
            key={idx}
            style={toggle ? animation(idx) : {}}
            className="section"
            to={path}
          >
            {title.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="social-media-container">
        <FacebookLogo className={`fl ${toggle ? "active" : null}`} />
        <TwitterLogo className={`tw ${toggle ? "active" : null}`} />
        <InstagramLogo className={`ing ${toggle ? "active" : null}`} />
      </div>
    </div>
  );
};

export default FullMenu;
