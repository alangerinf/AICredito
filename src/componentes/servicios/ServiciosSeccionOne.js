import React, {Component} from 'react';
import servicios from '../../img/portada_servicios.png';
import '../servicios/ServiciosSeccionOne.css';

class ServiciosSeccionOne extends Component {
 
  render() {
 
   
  	return (
        <div className="container-fluid">
        <div className="row principal-servicios-one">
            <div className="col-sm-4 dimension-servicios-one">
                <strong><h1>CONOCE NUESTROS SERVICIOS</h1></strong>
                <p className="principal-texto-servicios">Tenemos productos que se ajustan al estado actual de tus necesidades.
                    Creemos en la capacidad de una mente emprendedora, queremos escucharte, conocerte y ofrecerte la mejor solución financiera, de acuerdo a tu perfil.</p>
            </div>
            <div className="col-sm-8">
            </div>
            <div className="col-sm-12 dimension-imagen-servicios">
                <img src={servicios} className="img-fluid" height="591px" alt=""/>
            </div>
        </div>
    </div>
  	)
    
  }
 
}
 
export default ServiciosSeccionOne;