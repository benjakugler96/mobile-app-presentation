import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyledNav, HeaderStyledText } from "./HeaderNav.styled";

const HeaderNav = () => (
  <HeaderStyledNav>
    <ul>
      <li>
        <Link to="/">
          <HeaderStyledText color={({ theme }) => theme.blue01}>
            Home
          </HeaderStyledText>
        </Link>
      </li>

      <li>
        <Link to="/">
          <HeaderStyledText color={({ theme }) => theme.dark00}>
            The App
          </HeaderStyledText>
        </Link>
      </li>

      <li>
        <Link to="/">
          <div>
            <HeaderStyledText color={({ theme }) => theme.light00}>
              Download
            </HeaderStyledText>
          </div>
        </Link>
      </li>
    </ul>
  </HeaderStyledNav>
);

export default HeaderNav;
