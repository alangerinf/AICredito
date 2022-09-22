import React, {Component} from 'react';
import logoBlanco from '../../img/logoblanco.png';
import { NavLink } from "react-router-dom";
import '../footer/Footer.css';

class Footer extends Component {
 
  render() {
 
   
  	return (

        <div className="container-fluid footer">
            <div className="foot grupo-1">
                <div className="box alineacion">
                    <figure>
                        <a href="#"><img src={logoBlanco} className="logoblanco"/></a>
                    </figure>
                </div>
                <div className="box pantallas">
                    <h2> Pantallas </h2>
                    <NavLink to="/nosotros" className={({ isActive }) => (isActive ? "active" : "")}><p>Nosotros</p></NavLink>
                    <NavLink to="/servicios" className={({ isActive }) => (isActive ? "active" : "")}><p>Servicios</p></NavLink>
                    <NavLink to="/preguntas-frecuentes" className={({ isActive }) => (isActive ? "active" : "")}><p>Preguntas Frecuentes</p></NavLink>
                </div>
                <div className="box telefono">
                    <h2> Teléfono </h2>
                    <p> 01 987 34563 </p>
                    <h2> WhatsApp </h2>
                    <p> 996007529 </p>
                </div>
                <div className="box redes-footer">
                    <h2> Redes Sociales </h2>
                    <div className="red-social">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                        <a href="#" className="fa fa-whatsapp"></a>
                    </div>
                </div>
            </div>
        </div>
  	)
    
  }
 
}
 
export default Footer;