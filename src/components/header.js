import React from "react"

import Image from "./image"
import NavLink from "./nav-link"
import HamburgerMenu from "./hamburger-menu"
import styled from "styled-components"

const Navigation = styled.nav`
  padding: 1.45rem 1.0875rem;
`;

const NavigationButtons = styled.div`
  float: right;
`;

const Header = () => (
  <header
    style={{
      background: `grey`,
      marginBottom: `1.45rem`,
    }}
  >
    <Navigation>
      <NavLink path="/">
        <Image />
      </NavLink>

      <NavigationButtons>
        <NavLink path="/about">
          <h3>About</h3>
        </NavLink>

        <NavLink path="/visit">
          <h3>Visit</h3>
        </NavLink>

        <NavLink path="/resources">
          <h3>Resources</h3>
        </NavLink>

        <NavLink path="/give">
          <h3>Give</h3>
        </NavLink>

      </NavigationButtons>
    </Navigation>
  </header>
)

export default Header
