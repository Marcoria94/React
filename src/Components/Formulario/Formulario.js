import React, {useState,useContext} from "react";
import './formulario.css';
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { Formik } from "formik";

const Formulario = () => {
    const {finalizarCompra} = useContext(Context)
    const [alerta, setAlerta] = useState(false)


    return (
        <div className="contenedor">
            <Formik
            initialValues={
                {
                nombre : '',
                apellido : '',
                direccion: '',
                email : '',
            }
            }
            validate= {

                (valor) => {
                    let errores = {};

                    if(!valor.nombre){
                     errores.nombre = 'Por favor ingresa un nombre.'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valor.nombre)){
                        errores.nombre= 'Ingresar solo letras y espacios.'
                    }

                    if(!valor.apellido){
                        errores.apellido = 'Porfavor ingresa un apellido.'
                       }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valor.apellido)){
                        errores.apellido= 'Ingresar solo letras y espacios.'
                    }

                    if(!valor.direccion){
                        errores.direccion = 'Porfavor ingresa una dirección.'
                    }
                    if(!valor.email){
                        errores.email= 'Por favor ingresa un email.'
                    }else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valor.email)){
                        errores.email= 'Formato de email incorrecto.'
                    }
                    
                    return errores;
                
                }
            }
            onSubmit={(valores, {resetForm})=>{ 
                resetForm();
               //finalizarCompra(valores)
               setAlerta(true)
               }}
            >
                {({values , errors , touched,  handleSubmit , handleBlur ,handleChange} ) => (
                    <form onSubmit={handleSubmit} className="formulario">
                        <h1 className="titulo">Completa tus datos</h1>
                    <div>
                      <label htmlFor="nombre">Nombre</label>
                      <input type="text" 
                      id="nombre"
                      name="nombre" 
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.nombre && errors.nombre && <div><span  className="spanForm">{errors.nombre}</span></div>}
                    </div>
                    <div>
                     <label htmlFor="apellido">Apellido</label>
                    <input type="text"
                    id="apellido"
                    name="apellido" 
                    value={values.apellido} 
                    onChange={handleChange}
                    onBlur={handleBlur}

                     />
                      {touched.apellido && errors.apellido && <div><span className="spanForm">{errors.apellido}</span></div>}
                     </div>
                     <div>
                    <label htmlFor="direccion">Direccion</label>
                    <input type="text" 
                    id="direccion" 
                    name="direccion" 
                    value={values.direccion} 
                    onChange={handleChange}
                    onBlur={handleBlur}

                    />
                     {touched.direccion && errors.direccion && <div><span className="spanForm">{errors.direccion}</span></div>}
                    </div>
                    <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    id="email" 
                    name="email" 
                    value={values.email} 
                    onChange={handleChange}
                    onBlur={handleBlur}
 
                    />
                    {touched.email && errors.email && <div><span className="spanForm">{errors.email}</span></div>}
                    </div>
                    <div>
                   <div>
                   <button type="submit"> Enviar </button>
                   </div>
                   <div className="sweetAlert">
                   { alerta && 
                   <>
                   <p>Tu codigo de compra es</p>
                   <Link to="/check">
                   <button>Corroborar compra</button>
                   </Link>
                   </>
                   }
                   </div>
                 
            
                   </div>
                </form>

                )}
        
        </Formik>
        </div>
       
    )
}

export default Formulario