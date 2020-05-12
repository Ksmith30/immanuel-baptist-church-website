import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import SideNavigation from "./side-navigation"
import FloatingActionButton from "./floating-action-button"
import "./layout.css"

const Layout = ({ children }) => {
  const [isClicked, openSideNav] = useState(false);

  return (
    <>
      <Header />
      <FloatingActionButton isClicked={isClicked} onClick={() => openSideNav(!isClicked)}/>
      <SideNavigation isClicked={isClicked}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.5rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
