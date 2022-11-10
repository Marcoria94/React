import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({productos}) =>{
    return (
        
        <div className="container-card"> 
            <div>
                <img width="100%" height="300px" src={productos.images} alt="" />
            </div>
           
         <h2>{productos.title}</h2>
         <h3>Precio: ${productos.price}</h3>
         <Link to={'/products/'+ productos.id}>
         <button className="verDetalles">Ver detalles</button>
         </Link>
         </div>
        
    )
}

export default Item