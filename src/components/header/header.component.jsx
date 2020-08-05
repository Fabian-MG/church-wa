import React from "react";
import { Link } from "react-router-dom";


import "./header.styles.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="sections-container">
        <Link className="section" to="/">
          Principal
        </Link>
        <Link className="section" to="/">
          Ministerios
        </Link>
        <Link className="section" to="/">
          Noticias
        </Link>
        <Link className="section" to="/">
          Predicas
        </Link>
      </div>
    </div>
  );
};

export default Header;
