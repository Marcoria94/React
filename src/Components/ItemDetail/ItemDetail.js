import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'


const ItemDetail = ({producto}) => {

  const onAdd = () => {
    console.log('agregaste productos');
  }
  return (
    <>
    <div class="container-detail">
      <div class="detailImg">
      <img alt={producto.title} src={producto.images} />
      </div>
      <div class="detail">
      <h1 key={producto.id}>{producto.title}</h1>
      <p>Descripcion:{producto.description}</p>
      <h2>Precio: ${producto.price}</h2>
      <div class="Contador"> 
      <ItemCount  stock={15} initial={1} onAdd={onAdd}/>
      </div>
    
     </div>
      </div>
    </>
  )

}

export default ItemDetail