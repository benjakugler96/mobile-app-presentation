import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import whiteLogo from "../../assets/images/qaabelLogoWhite.png";

const Footer = () => (
  <footer className='footer-container'>
    <nav className='footer-nav flex-1'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact/">Contact us</Link>
        </li>
        <li>
          <Link to="/">Download the App</Link>
        </li>
      </ul>
    </nav>
    <div className='footer-logo flex-1'>
      <img src={whiteLogo} alt='white logo' />
    </div>
    <span className='flex-1 span'></span>
  </footer>
);

export default Footer;
