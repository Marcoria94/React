import React,{useState, useContext} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Context } from "../Context/Context"


const ItemDetail = ({producto}) => {
  const [proceso , setProceso]= useState(true)
  const {addItem} = useContext(Context);

  const onAdd = (count) => {
    setProceso(false);
    addItem(producto ,  count);
  }
  return (
    <>
    <div className="container-detail">
      <div className="detailImg">
      <img alt={producto.title} src={producto.images} />
      </div>
      <div className="detail">
      <h1 key={producto.id}>{producto.title}</h1>
      <p>Descripcion :{producto.description}</p>
      <h2>Precio : ${producto.price}</h2>

      <div className="Contador"> 
      { proceso ?
      <ItemCount  stock={25} initial={1} onAdd={onAdd}/>
      : <Link to="/cart">
        <button className="finalizar">Finalizar compra</button>
      </Link>
    }
      </div>
    
    
     </div>
      </div>
    </>
  )

}

export default ItemDetail