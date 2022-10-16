import React  from 'react';
import Item from '../Item/Item';
import './Itemlist.css'


const ItemList = ({productos}) => {
    
    return (
    <>
    {
        productos.map((producto)=> {
            return < Item productos={producto} key={producto.id}/>
           
        }

        )
    }
        
    </>
    )
}


export default ItemList

