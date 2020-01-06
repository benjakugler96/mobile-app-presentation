import React from "react";
import { Link } from "react-router-dom";
import { StyledRightMenuNav } from "./RightMenuNav.styled";

const RightMenuNav = () => (
  <StyledRightMenuNav>
    <ul>
      <li>
        <Link>Contact us</Link>
      </li>
      <li>
        <Link>Download</Link>
      </li>
      <li>
        <Link>What's the App about</Link>
      </li>
    </ul>
  </StyledRightMenuNav>
);

export default RightMenuNav;
