import React from "react";
import { Link } from "react-router-dom";
import { StyledRightMenuNav } from "./RightMenuNav.styled";

const RightMenuNav = () => (
  <StyledRightMenuNav>
    <ul>
      <li>
        <Link to='/contact/'>Contact us</Link>
      </li>
      <li>
        <Link>Download</Link>
      </li>
    </ul>
  </StyledRightMenuNav>
);

export default RightMenuNav;
