import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { obtenerProductos,obtenerProductosPorCategoria } from '../Data/Data'
import ItemCard from './ItemCard/ItemCard'
import "./ItemListContainer.css"

const ItemListContainer = () => {
  let {nombreCategoria} = useParams()
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    if(!nombreCategoria){
      obtenerProductos().then(data => {
        setProductos(data)
      })
    }else{
      obtenerProductosPorCategoria(nombreCategoria).then(data => {
        setProductos(data)
      })
    }
  },[nombreCategoria])
  console.log("productos",productos)

  if(!productos.length > 0){
    return(
      <div>
        <p>Cargandoo....</p>
      </div>
    )
  }

  return (
    <div>
      <ul className='item-list-container'>
        {productos.length > 0 && productos.map(producto => (
          <ItemCard key={producto.id} datosProducto={producto}/>
        ))}
      </ul>
    </div>
  )
}

export default ItemListContainer