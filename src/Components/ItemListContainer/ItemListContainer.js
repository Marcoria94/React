import React , {useState , useEffect} from "react";
import Itemlist from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import {getDocs , collection, query, where} from "firebase/firestore"
import { db } from "../../firebase/firebase";
import './ItemListContainer.css'


export const ItemListContainer = ({greeting}) => {


const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

const {id} = useParams();


const productCollection = collection (db , 'productos')
const q = query(productCollection, where('category', '==' , `${id}`))

useEffect(()=>{
    
    getDocs(  id ? q : productCollection)
    .then((result) => {
        const ListaDeProductos =  result.docs.map( item => {
            return {
                ...item.data() ,
                id: item.id,
            };
        });
        setProductos (ListaDeProductos)
    })
    .catch(err => console.log(err))
    .finally(setLoading(false))   
}, [id,productCollection]);
        


    return(
        <>
        <h1>{greeting}</h1>
       <div className="card-item">
        { <> {loading ? <h1>Cargando</h1> : < Itemlist productos={productos} /> } </>}
        
        </div>
        </>

    )
}