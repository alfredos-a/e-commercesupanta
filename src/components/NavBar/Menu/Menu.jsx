import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <nav className="menu__wrap">
        <ul className="menu__list">
          <li className="menu__item">Hombre</li>
          <li className="menu__item">Mujer</li>
          <li className="menu__item">Niños</li>
          <li className="menu__item">Equipamiento</li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
