import React, { useState } from "react";

import CollapsableMenu from "../collapsable-menu/collapsable-menu.component";
import FullMenu from "../full-menu/full-menu.component";

import "./header.styles.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isTop, setIsTop] = React.useState(true);
  const [windowHeight, setWindowHeight] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const navigationHeight = 5 * 8;
      if (window.scrollY + navigationHeight < windowHeight) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [windowHeight]);

  React.useEffect(() => {
    const onResize = () => {
      setWindowHeight(window.innerHeight);
    };

    setWindowHeight(window.innerHeight);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className={`Header ${isTop ? "" : "active"}`}>
      <div className="logo-container">
        <div className='logo'/>
        <span className="title">Hola</span>

      </div>
      <div className="menu-container">
        <FullMenu toggle={toggle} />
        <CollapsableMenu collapseState={{ toggle, setToggle }} />
      </div>
    </div>
  );
};

export default Header;
