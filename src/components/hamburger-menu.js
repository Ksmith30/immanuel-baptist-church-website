import PropTypes from "prop-types"
import React from "react"

const styles = {
    
}

const HamburgerMenu = () => (
    <button>
        <div />
        <div />
        <div />
    </button>
)

HamburgerMenu.propTypes = {
  path: PropTypes.string,
  children: PropTypes.element
}

HamburgerMenu.defaultProps = {
  path: ``,
  children: PropTypes.element
}

export default HamburgerMenu
