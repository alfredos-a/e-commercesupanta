import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <nav className="menu__wrap">
        <ul className="menu__list">
          <Link  to="/categoria/despensa" className="menu__item">Despensa</Link>
          <Link  to="/categoria/lacteos" className="menu__item">Lácteos</Link>
          <Link  to="/categoria/carnes" className="menu__item">Carnes</Link>
          <Link  to="/categoria/limpieza" className="menu__item">Limpieza</Link>
          <Link  to="/categoria/panaderia" className="menu__item">Panadería</Link>
          <Link  to="/categoria/frutas" className="menu__item">Frutas</Link>
          <Link  to="/categoria/verduras" className="menu__item">Verduras</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
