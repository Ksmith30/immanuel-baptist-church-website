import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from './image';

const Footer = () => (
  <footer
    style={{
      background: `grey`,
      width: `100%`,
      bottom: 0,
      left: 0,
      height: `150px`
    }}
  >
      <Image />
      <p>800 S Pleasant St | Springdale, AR 72764</p>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer;
