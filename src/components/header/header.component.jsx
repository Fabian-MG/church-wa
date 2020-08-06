import React, { useState } from "react";

import CollapsableMenu from "../collapsable-menu/collapsable-menu.component";
import FullMenu from "../full-menu/full-menu.component";

import "./header.styles.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="Header">
      <div className="logo-container">
        <span className='title'></span>
      </div>
      <div className="menu-container">
        <FullMenu toggle={toggle} />
        <CollapsableMenu collapseState={{ toggle, setToggle }} />
      </div>
    </div>
  );
};

export default Header;
