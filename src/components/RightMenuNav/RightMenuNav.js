import React from "react";
import { Link } from "react-router-dom";
import { StyledRightMenuNav } from "./RightMenuNav.styled";

const RightMenuNav = ({ handleMenu }) => (
  <StyledRightMenuNav>
    <ul>
    <li>
        <Link to="/" onClick={() => handleMenu()}>Home</Link>
      </li>
      <li>
        <Link to="/contact/" onClick={() => handleMenu()}>Contact us</Link>
      </li>
      <li>
        <Link to="/" onClick={() => handleMenu()}>Download</Link>
      </li>
    </ul>
  </StyledRightMenuNav>
);

export default RightMenuNav;
