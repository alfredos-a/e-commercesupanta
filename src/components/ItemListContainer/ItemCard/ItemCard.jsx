import React from "react";

const ItemCard = ({ datosProducto }) => {
  return (
    <>
      <li key={datosProducto.id}>
        <div className="item-card">
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
            <div className="item-card__cantidad">
              <p>{datosProducto.cantidad}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ItemCard;
