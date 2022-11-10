import React, {useState , useEffect} from "react";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDoc, collection, doc} from "firebase/firestore"
import { db } from "../../firebase/firebase";
import { PropagateLoader } from "react-spinners";

const ItemDetailContainer = ({greeting}) => {
      const [producto , setProducto] = useState([])
      const [loading, setLoading] = useState(true);

      const {id} = useParams();


      useEffect ( ()=> {
        const productCollection = collection( db , 'productos')
        const refDoc = doc (productCollection, id)
        const getItems = async() =>{
          try {
           const datos = await getDoc(refDoc);
           const dataDatos = {
            id : datos.id ,
            ...datos.data()
          }
          
          setProducto(dataDatos)
          }
        
          catch(error){
            console.error(error);
          }
          finally{
            setLoading(false);
          }
        }
     getItems()
      }, [id]) 

    return (
      <>
      <h1>{greeting}</h1>
      { <> { loading ? <PropagateLoader
       loading={loading}
       color={'#36d7b7'}
       size={15}
       aria-label="Loading Spinner"
       data-testid="loader"
     />
     : 
     < ItemDetail producto={producto}/> } </>}
      </>
    )

}


export default ItemDetailContainer