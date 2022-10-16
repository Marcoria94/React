import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({producto}) => {
  const onAdd = () => {
    console.log('agregaste productos');
  }
  return (
    <>
      <img alt={producto.title} src={producto.images} />
      <h1 key={producto.id}>{producto.title}</h1>
      <span>Descripcion:{producto.description}</span>
      <h2>Precio: ${producto.price}</h2>
      <ItemCount  stock={15} initial={1} onAdd={onAdd}/>
     <Link to="/">
      <button>Volver</button>
      </Link>
    </>
  )

}

export default ItemDetail