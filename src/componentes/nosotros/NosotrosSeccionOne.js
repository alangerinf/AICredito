import React, {Component} from 'react';
import flecha from '../../img/flecha.png';
import '../nosotros/NosotrosSeccionOne.css';

class NosotrosSeccionOne extends Component {
 
  render() {
 
   
  	return (
        <div class="container-fluid fondo-seccion-1">
            <div className="box-cabecera-nosotros principal-2">
                <div className="seccion-1-nosotros-top">
                    <strong><h1 className="titulo-1-nosotros">CONOCE UN POCO MÁS DE NOSOTROS</h1></strong>
                    <p className="principal-texto texto-nosotros">Somos una empresa Fintech que apostamos por generar inclusión financiera a través de la atención con nuestros productos financieros (crédito grupal, crédito paralelo), con la finalidad de llegar a personas de difícil acceso al crédito de la banca tradicional.</p>
                    <img className="img-flecha" src={flecha} />
                </div>
            </div>
        </div>
  	)
    
  }
 
}
 
export default NosotrosSeccionOne;