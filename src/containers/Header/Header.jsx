import React, { useState } from "react";
import { Burger, HeaderNav, Menu, Icon } from "../../components";
import "./Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => setOpenMenu(!openMenu);
  return (
    <header className='main-header'>
      <Icon />
      <HeaderNav />
      <Burger openMenu={openMenu} handleMenu={handleMenu} />
      <Menu openMenu={openMenu} handleMenu={handleMenu} />
    </header>
  );
};

export default Header;
