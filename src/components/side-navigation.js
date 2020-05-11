import React from "react"
import "./side-navigation.css"
import { Link } from "gatsby"
import { CollapsibleMenu } from "./collapsible-menu";

function SideNavigation(props) {
  let className = ""
  if (props.isClicked) {
    className += " active"
  }

  return (
    <div id="sideNavigation" className={className}>
    <Link to="/">
        <h3>Home</h3>
    </Link>

    <Link to="/about">
        <h3>About</h3>
    </Link>

      <Link to="/visit">
        <h3>Visit</h3>
      </Link>

      <Link to="/resources">
        <h3>Resources</h3>
      </Link>

      <Link to="/give">
        <h3>Give</h3>
      </Link>
    </div>
  )
}

export default SideNavigation
