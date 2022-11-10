import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from "../Context/Context";
import "./CartWidget.css"




const CartWidget = () => {
    const { qty , cart} = useContext(Context)
    return(
        <>
         { cart.length === 0 ? (<ShoppingCartIcon fontSize="large" /> ) : 
         <div className="cartCartwidget">
          <ShoppingCartIcon fontSize="large" color="primary" /> 
          <p className="cantidad">{qty}</p>
          </div> }
       
         </>
    )
    
}

export default CartWidget