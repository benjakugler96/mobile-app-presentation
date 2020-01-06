import React from "react";
import { IconStyledContainer } from "./Icon.styled";
import logo from "../../assets/images/qaabelLogo.png";

const Icon = () => (
  <IconStyledContainer>
    <img src={logo} alt='Qaabel' />
  </IconStyledContainer>
);

export default Icon;
