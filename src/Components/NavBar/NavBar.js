import React from "react";
import './NavBar.css';
import logo from "../../assets/portoon.png";
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const category = [
        {id : 0 , nombre: "Jewelery", ruta:'/category/1'},
        {id : 1 , nombre: "Electronics", ruta:'/category/2'},
        {id : 2 , nombre: "Furniture", ruta:'/category/3'},
        {id : 3 , nombre: "Shoes", ruta:'/category/4'},
        {id : 4 , nombre: "Others", ruta:'/category/5'},

    ]
    return (
       <header>
        <Link to='/'>
        <img src= {logo} alt="" />
        </Link>
        <nav>
            <ul>
                <li>
            {
                category.map((categoria) => {
                    return ( <NavLink key = {categoria.id} to={categoria.ruta}> {categoria.nombre}</NavLink>)
                })
            }
            </li>
            </ul>
        </nav>
        <Link to="/cart">
        <div className="carrito">
        <CartWidget />
        </div>
        </Link>
       </header>
    )
}

export default NavBar