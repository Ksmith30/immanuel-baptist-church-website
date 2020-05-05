import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const linkStyles = {
  color: `white`,
  display: `inline-block`,
  textDecoration: `none`,
  margin: `0 0.75rem`,
  padding: `0 0.25rem`,
}

const NavLink = ({ path, children, activeStyle }) => (
  <Link to={path} style={linkStyles} activeStyle={activeStyle}>
    {children}
  </Link>
)

NavLink.propTypes = {
  path: PropTypes.string,
  children: PropTypes.element
}

NavLink.defaultProps = {
  path: ``,
  children: PropTypes.element
}

export default NavLink
