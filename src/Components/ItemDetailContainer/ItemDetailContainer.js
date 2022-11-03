import React, {useState , useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDoc, collection, doc} from "firebase/firestore"
import { db } from "../../firebase/firebase";

const ItemDetailContainer = ({greeting}) => {
      const [producto , setProducto] = useState([])
      const [loading, setLoading] = useState(true);

      const {id} = useParams();





      useEffect ( ()=> {
        const productCollection = collection( db , 'productos')
        const refDoc = doc (productCollection, id)
          getDoc(refDoc)
           .then(result => {
            setProducto({
              id : result.id ,
              ...result.data()
            })
           })
           .catch( err => {console.log(err);})
           .finally(setLoading(false))
      }, [id]) 

    return (
      <>
      <h1>{greeting}</h1>
      { <> { loading ? <h1> Cargando</h1> : < ItemDetail producto={producto}/> } </>}
      </>
    )

}


export default ItemDetailContainer