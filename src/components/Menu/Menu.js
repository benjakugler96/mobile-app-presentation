import React from "react";
import {
  StyledMenu,
  StyledMenuContainer,
  StyledMenuOpacity
} from "./Menu.styled";
import phoneImg from "../../assets/images/qaabelPhone.png";
import RightMenuNav from "../RightMenuNav";

const Menu = ({ openMenu, handleMenu }) => {
  return (
    <>
      {openMenu && (
        <StyledMenuContainer>
          <StyledMenuOpacity onClick={() => handleMenu()} />
          <StyledMenu openMenu={openMenu}>
            <img src={phoneImg} className='menu-img' alt="app img" />
            <section>
              <header className='menu-title'>Menu</header>
              <RightMenuNav handleMenu={handleMenu} />
            </section>

            <footer className='menu-footer'>www.waabel.com</footer>
          </StyledMenu>
        </StyledMenuContainer>
      )}
    </>
  );
};
export default Menu;
