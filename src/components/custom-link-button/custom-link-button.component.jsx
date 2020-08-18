import React from "react";
import { Link } from "react-router-dom";

import "./custom-link-button.styles.scss";

const CustomLinkButton = ({ title, path }) => {
  return (
    <Link to={`/${path}`} className="custom-link-button">
      {title}
    </Link>
  );
};

export default CustomLinkButton;
