import React, { useState } from "react"
import "./floating-action-button.css"

function HamburgerMenu() {
  const [isClicked, openSideNav] = useState(false);

  let className = "";
  if (isClicked) {
    className = "active";
  }
  return (
    <button className={className} onClick={() => openSideNav(!isClicked)}>
        <div className="topBar"/>
        <div className="middleBar"/>
        <div className="bottomBar"/>
    </button>
  );
}

export default HamburgerMenu
