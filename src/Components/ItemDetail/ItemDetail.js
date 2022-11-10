import React,{useState, useContext} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { Context } from "../Context/Context";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'


const ItemDetail = ({producto}) => {
  const [proceso , setProceso]= useState(true)
  const {addItem} = useContext(Context);

  const onAdd = (count) => {
    setProceso(false);
    addItem(producto ,  count)
  }
  return (
    <>
    <div className="container-detail">
      <div className="detailImg">
      <img alt={producto.title} src={producto.images} />
      </div>
      <div className="detail">
      <h2 key={producto.id}>{producto.title}</h2>
      <p>{producto.description}</p>
      <h3>${producto.price}</h3>

      <div className="Contador"> 
      { proceso ?
      <div className="div-count">
      <ItemCount  stock={producto.stock} initial={1} onAdd={onAdd}/>
      </div>
      : 
      <div>
      <Link to="/cart">
        <button className="finalizar"> IR <ShoppingCartIcon /> </button>
      </Link>
      </div>
      
    }
      </div>
    
    
     </div>
      </div>
    </>
  )

}

export default ItemDetail