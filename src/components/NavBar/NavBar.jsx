import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import Menu from "./Menu/Menu";
import "./NavBar.css"
import { Logo } from "./Logo/Logo";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrap">
        <Logo/>
        <Menu/>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
