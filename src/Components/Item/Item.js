import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({productos}) =>{
    return (
        
        <div class="container-card"> 
            <div>
                <img src={productos.images} alt="" />
            </div>
           
         <h1>{productos.title}</h1>
         <h2>Precio: ${productos.price}</h2>
         <Link to={'/products/'+ productos.id}>
         <button>Ver detalles</button>
         </Link>
         </div>
        
    )
}

export default Item