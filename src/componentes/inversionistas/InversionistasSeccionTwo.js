import React, {Component} from 'react';
import '../inversionistas/InversionistasSeccionTwo.css';

class InversionistasSeccionTwo extends Component {
 
  render() {
 
   
  	return (
        <div className="container-fluid background-inversionistas" >
        <div className="row texto-inver-two">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 text-center">
                <sub >PROCEDIMIENTO</sub>
                <h3 className="titulos-azul-inversionista">Lorem ipsum dolor Lorem
                    ipsum dolor</h3>
            </div>
            <div className="col-sm-4"></div>
        </div>
        <div className="row contenido-proc-inversionista">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <div className="row contenido-procedimiento">
                  <div className="col-sm-4">
                    <h1>1</h1>
                    <p className="titulo">Lorem Ipsun dolor sit amet</p>
                    <p className="contenido">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean </p>
                  </div>
                  <div className="col-sm-4">
                    <h1>2</h1>
                    <p className="titulo">Lorem Ipsun dolor sit amet</p>
                    <p className="contenido">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean </p>
                  </div>
                  <div className="col-sm-4">
                    <h1>3</h1>
                    <p className="titulo">Lorem Ipsun dolor sit amet</p>
                    <p className="contenido">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean </p>
                  </div>
              </div>
            </div>
            <div className="col-sm-3"></div>
        </div>
    </div>
  	)
    
  }
 
}
 
export default InversionistasSeccionTwo;