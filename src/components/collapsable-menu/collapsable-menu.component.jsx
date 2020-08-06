import React from "react";

import "./collapsable.-menu.styles.scss";

const CollapsableMenu = ({ collapseState: { toggle, setToggle } }) => {
  return (
    <div className="menu">
      <span className="title">MENÚ</span>
      <div
        className={`hamburguer ${toggle ? "toggle" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default CollapsableMenu;
