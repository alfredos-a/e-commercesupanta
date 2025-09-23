import React from "react";
import "./ItemCard.css";

const ItemCard = ({ datosProducto }) => {
  return (
    <>
      <li className="item-card" key={datosProducto.id}>
        <div className="item-card__wrap">
          <div className="item-card__img">
            <img src={datosProducto.imagen} alt="imagen-producto" />
          </div>
          <div className="item-card__nombre">
            <p>{datosProducto.nombre}</p>
          </div>
          <div className="item-card__precio">
            <p>{`Valor:  ${datosProducto.precio}`}</p>
          </div>
          <div className="item-card__cantidad">
            <p>{datosProducto.cantidad}</p>
          </div>
          <div className="item-card__button">
            <button className="item-card__btn">Agregar al carrito</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default ItemCard;
