import React, {useState} from "react";
import "./ItemCount.css";

 const ItemCount = ({stock,initial,onAdd}) => {
    const [count, setCount] = useState(initial);

    const add = () =>{
        if( count < stock){
            setCount(count + 1)
        }
        
    };
     
    const subtract = () =>{
        if( count > 1) {
            setCount(count - 1)

        }

    };
    
    return( 
        <>
        <div className="container">
            <div>
                
            </div>
        <div className="contador">
        <button onClick={add} className="botonAgregar">+</button>
        <h2>{count}</h2>
        <button onClick={subtract} className="botonRestar">-</button>
        </div>
        <div className="botonContador">
            <button onClick={onAdd} className="botonCarrito">Agregar al carrito
        </button></div>
        </div>
        </>
    )
}
export default ItemCount
