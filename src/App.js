import React from "react";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Formulario from "./Components/Formulario/Formulario";
import Cart from "./Components/Cart/Cart"
import Checked from "./Components/Checked/Checked";
import { CustomProvider } from "./Components/Context/Context";



const App = () => {
  const mensaje = "Bienvenidos";

  return (
  <>
  <BrowserRouter>
  <CustomProvider>
  < NavBar />
  <Routes>
    <Route path="/" element={< ItemListContainer greeting={mensaje} />} />
    <Route path="/category/:id" element={<ItemListContainer greeting={mensaje} />}/>
    <Route path="/products/:id" element={<ItemDetailContainer greeting={mensaje} />}/>
    <Route path="/cart" element={< Cart />}/>
    <Route path="/formulario" element={ <Formulario />} />
    <Route path="/check" element={<Checked />}/>
  </Routes>
  </CustomProvider>
  </BrowserRouter>
  </>
  )
}

export default App