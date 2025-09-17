import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <nav className="menu__wrap">
        <ul className="menu__list">
          <li className="menu__item">Despensa</li>
          <li className="menu__item">Lacteos</li>
          <li className="menu__item">Aseo</li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
