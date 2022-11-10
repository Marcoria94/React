import React , {useState , useEffect } from "react";
import Itemlist from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import {getDocs , collection, query, where} from "firebase/firestore"
import { db } from "../../firebase/firebase";
import './ItemListContainer.css';
import { PropagateLoader } from "react-spinners";



export const ItemListContainer = ({greeting}) => {

const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

const {id} = useParams();




useEffect(()=>{
    const productCollection = collection (db , 'productos')
    const q = id ? query(productCollection, where('category', '==' , `${id}`)) : productCollection;
    const getItems = async () => {
    try{
        const datos = await  getDocs(q);
        const dataDatos = datos.docs.map( item => {
                return {
                    ...item.data() ,
                    id: item.id,
                };
            })
            setProductos (dataDatos)
        }
        catch(error){
           console.log(error);
        }
        finally{
            setLoading(false);
        }
} 
getItems()
}, [id]);
        


    return(
        <>
        <h1>{greeting}</h1>
       <div className="card-item">
        { <> { loading ? <PropagateLoader
        loading={loading}
        color={'#36d7b7'}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : < Itemlist productos={productos} /> } </>}
        
        </div>
        </>

    )
}