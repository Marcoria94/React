import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({productos}) =>{
    return (
        
        <div class="container-card"> 
            <div>
                <img width="100%" height="300px" src={productos.images} alt="" />
            </div>
           
         <h1>{productos.title}</h1>
         <h2>Precio: ${productos.price}</h2>
         <Link to={'/products/'+ productos.id}>
         <button class="verDetalles">Ver detalles</button>
         </Link>
         </div>
        
    )
}

export default Item