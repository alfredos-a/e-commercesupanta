import React, { useEffect, useState } from 'react'
import { obtenerProductos } from '../Data/Data'
import ItemCard from './ItemCard/ItemCard'

const ItemListContainer = ({datos}) => {

  const [productos, setProductos] = useState([])

  useEffect(()=>{
    obtenerProductos().then(data => {
      setProductos(data)
    })
  },[])
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
      <ul>
        {productos.length > 0 && productos.map(producto => (
          <ItemCard datosProducto={producto}/>
        ))}
      </ul>
    </div>
  )
}

export default ItemListContainer