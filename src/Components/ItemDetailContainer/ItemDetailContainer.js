import React, {useState , useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
      const [producto , setProducto] = useState([])
      const [loading, setLoading] = useState(true);

      const {id} = useParams();


      useEffect ( ()=> {
        setTimeout( () => {
            fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(res => res.json())
            .then((data) => { setProducto(data)})
            .catch((err) => console.log(err))
            .finally(setLoading(false))

        } , 2000 )
      }, [id]) 


    return (
      <>
      { <> { loading ? <h1> Cargando</h1> : < ItemDetail producto={producto}/> } </>}
      </>
    )

}


export default ItemDetailContainer