import React , {useState , useEffect} from "react";
import Itemlist from '../ItemList/ItemList';
import { useParams } from "react-router-dom";


export const ItemListContainer = ({greeting}) => {


const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

const {id} = useParams();

const URL_MAIN = 'https://api.escuelajs.co/api/v1/products'
const URL_CATEGORY = `https://api.escuelajs.co/api/v1/categories/${id}/products`


useEffect(()=>{
    setTimeout(() => {
fetch(id === undefined ?  URL_MAIN : URL_CATEGORY)
    .then(res => res.json() )
    .then((data) => {setProductos(data)
    console.log(data)})
    .catch((err) => console.log(err))
    .finally(setLoading(false))
}, 1000)
}, [id]);
        


    return(
        <>
        <h1>{greeting}</h1>
       <div class="card-item">
        { <> {loading ? <h1>Cargando</h1> : < Itemlist productos={productos} /> } </>}
        
        </div>
        </>

    )
}