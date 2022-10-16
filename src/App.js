import React from "react";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import CartWidget from "./Components/CartWidget/CartWidget";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  const mensaje = "Bienvenidos";

  return (
  <>
  <BrowserRouter>
  < NavBar />
  <Routes>
    <Route path="/" element={< ItemListContainer greeting={mensaje} />} />
    <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
    <Route path="/products/:id" element={<ItemDetailContainer greeting={mensaje} />}/>
    <Route path="/cart" element={<CartWidget />}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App