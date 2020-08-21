import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as FacebookLogo } from "../../assets/facebook-social-logo-svgrepo-com.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter-svgrepo-com.svg";
import { ReactComponent as InstagramLogo } from "../../assets/instagram-svgrepo-com (1).svg";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-title">
        <h2> Iglesia de Cristo en Querétaro</h2>
      </div>
      <div className="footer-sections">
        <Link className="section" to="/">
          Sobre Nosotros
        </Link>
        |
        <Link className="section" to="/">
          FAQ
        </Link>
        |
        <Link className="section" to="/">
          Nuestros Lideres
        </Link>
        |
        <Link className="section" to="/">
          Localizaciones
        </Link>
        |
        <Link className="section" to="/">
          Contacto
        </Link>
      </div>
      <div className="social-media-container">
        <FacebookLogo className="fl" />
        <TwitterLogo className="tw" />
        <InstagramLogo className="ing" />
      </div>
    </div>
  );
};

export default Footer;
