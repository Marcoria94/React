import React,{useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import {getDoc, collection, doc} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { PropagateLoader } from "react-spinners"

import { Link } from "react-router-dom";


const Checked = () => {
  
  
    const [datos, setDatos] = useState([])
    const [comprobante, setComprobante] = useState('')
    const [loading, setLoading] = useState(true);


    const handleChange = (e) =>{
        setComprobante(e.target.value)
    }

    const {id} = useParams();

    useEffect ( ()=> {

      const productCollection = collection( db , 'ventas')
      const refDoc = doc(productCollection, id)


      const getItems = async() =>{
        try {
         const result = await getDoc(refDoc);
         const dataDatos = {
          id : result.id ,
          ...result.data()
        }
        
        setDatos(dataDatos)
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

       
     { loading ?  <PropagateLoader
       
       loading={loading}
       color={'#36d7b7'}
       size={15}
       aria-label="Loading Spinner"
       data-testid="loader"
     /> :
     <form>
       <input type="text" required onChange={handleChange} />
       <Link to={ '/check/' + comprobante}>
      <button>Buscar</button>
      </Link>
      </form>
      
    
     }


    
    
    
    </>
    
    )
    

}

export default Checked