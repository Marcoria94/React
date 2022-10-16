import React from "react";



const ItemDetail = ({producto}) => {
  return (
    <>
      <img alt={producto.title} src={producto.images} />
      <h1 key={producto.id}>{producto.title}</h1>
      <span>Descripcion:{producto.description}</span>
      <h2>Precio: ${producto.price}</h2>
    </>
  )

}

export default ItemDetail