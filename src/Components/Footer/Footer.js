import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from "../../assets/logoTienda.png";
import './footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return(
        <footer>
            <div className="footer">
            <img src={logo} alt=""  className="logo-nav"  />
            <h4> © Todos los derechos reservados</h4>
            <div>
           <a href="https://www.linkedin.com/in/mariano-coria-114841241/" target="_blank"><LinkedInIcon  fontSize="large" /></a> 
            <a href="https://github.com/Marcoria94" target="_blank"><GitHubIcon fontSize="large" /></a>
            </div>
            </div>


        </footer>

    )
}

export default Footer