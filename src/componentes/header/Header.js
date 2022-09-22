import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png';
import '../header/Header.css';

class Header extends Component {
 
  render() {
 
  	return (
        <div className="container-fluid estatico">
            <div className="row" >
                <div className="col-sm-12 cabezera ">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light logo-nav-container"  >
                        <div className="alineacion-logo">
                            <div>
                            <a className="navbar-brand " href="index.html"><img src={logo}  alt=""></img></a>
                            </div>
                            <div className="hamburgesa">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon ocultar"></span>
                                    <span className="fa fa-close mostrar"></span>
                        </button>
                            </div>
                        
                      
                    </div>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <div className="alineacion-menu">
                                <ul className="navbar-nav " >
                                    <li className="nav-item active separacion-menu">
                                        <NavLink  to="/" className={({ isActive }) => (isActive ? "active" : "")}>Inicio</NavLink>
                                    </li>
                                    <li className="nav-item separacion-menu">
                                        <NavLink to="/nosotros" className={({ isActive }) => (isActive ? "active" : "")}>Nosotros</NavLink>
                                    </li>
                                    <li className="nav-item separacion-menu">
                                        <NavLink to="/servicios" className={({ isActive }) => (isActive ? "active" : "")}>Servicios</NavLink>
                                    </li>
                                    <li className="nav-item separacion-menu">
                                        <NavLink to="/preguntas-frecuentes" className={({ isActive }) => (isActive ? "active" : "")}>Preguntas Frecuentes</NavLink>
                                    </li>
                                    <div className="redes">
                                        <a href="#" className="fa fa-facebook"></a>
                                        <a href="#" className="fa fa-instagram"></a>
                                        <a href="#" className="fa fa-linkedin"></a>
                                        <a href="#" className="fa fa-whatsapp"></a>
                                    </div>
                                </ul>
                                
                            </div>
                
                            <span className="navbar-text alineacion-contactanos" >
                            <button className="btn button-header" >Contáctanos</button>
                        </span>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
  		
 
  	)
    
  }
 
}
 
export default Header;