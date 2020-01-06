import React from "react";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ openMenu, handleMenu }) => {
  return (
    <StyledBurger openMenu={openMenu} onClick={() => handleMenu()}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
