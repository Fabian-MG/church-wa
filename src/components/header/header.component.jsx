import React, { useState } from "react";

import CollapsableMenu from "../collapsable-menu/collapsable-menu.component";
import FullMenu from "../full-menu/full-menu.component";

import "./header.styles.scss";
import { withRouter } from "react-router-dom";

const Header = ({location}) => {
  const [toggle, setToggle] = useState(false);
  const [isTop, setIsTop] = React.useState(true);
  const [windowHeight, setWindowHeight] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const navigationHeight = 360;
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

  const mainColor = location.pathname !== '/' && 'rgba(1, 4, 35, 0.965)'

  return (
    <div className={`Header ${isTop ? "" : "active"}`} style={{background: mainColor}}>
      <div className="logo-container"></div>
      <div className="menu-container">
        <FullMenu toggle={toggle} />
        <CollapsableMenu collapseState={{ toggle, setToggle }} />
      </div>
    </div>
  );
};

export default withRouter(Header);
