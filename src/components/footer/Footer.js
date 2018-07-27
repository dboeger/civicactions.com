import React from "react"
import Link from "gatsby-link";

import Logo from "./../atoms/logo/Logo"

const Footer = ({email, phone, address, address_line_2, city}) => {
  let email_link = `/mailto:${email}`;

  return(
    <div className = "footer__wrapper">
      <footer className = "footer usa-grid">
        <Logo />
        <div className = "footer__address">
          <Link to = {email_link}> { email } </Link>
          <div className = "footer__phone">{ phone }</div>
          <div>{ address }</div>
          <div> { address_line_2 }</div>
          <div> { city } </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer;