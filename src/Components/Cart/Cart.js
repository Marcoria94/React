import React,{useContext} from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import "./Cart.css"
import { Button } from "@mui/material";

const Cart = () => {
    const { cart, total, clear, deleteItem} = useContext(Context)

    return ( 
        
        <>
        
        { cart.length === 0  ? (
        <>
         <h1>Tu carrito esta vacio, compra ahora <Link to="/"><span> CLICK AQUI</span></Link></h1>
        </> )  : 
          ( <>
        {console.log(cart)}
        { cart.map((product) =>  { 
            return (
        <>
        <div className="container-cart">
           <div className="cart-img">
        <img className="img-cart" alt={product.title} src={product.images}/>
           </div>
           <div className="cart-detail">
        <h2 key={product.id}>{product.title}</h2>
        <h2>Precio : {product.price}</h2>
        <h3>Cantidad : {product.count}</h3>
        <button className="boton-vaciar" onClick={()=>{deleteItem(product.id)}}> Eliminar </button>
        </div>
        </div>
        </>
        )
       }
       )
       }
       <div className="detail-cart">
        <Link to="/">
        <button className="boton-continue">Continuar comprando</button>
        </Link>
           <button className="boton-vaciar" onClick={clear}> Vaciar carrito</button>
        <    h3>Precio total de compra <span className="total">$ {total}</span></h3>
        
        </div> 
        </> ) 
}

        </>
    )
}
export default Cart