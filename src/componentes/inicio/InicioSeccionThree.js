import React, {Component} from 'react';
import circulo1 from '../../img/circulo1_blanco.PNG';
import circulo2 from '../../img/circulo2_blanco.PNG';
import circulo3 from '../../img/circulo3_blanco.PNG';
import '../inicio/InicioSeccionThree.css';

class InicioSeccionThree extends Component {
 
  render() {
 
   
  	return (
        <div className="container-fluid contenedor-servicios-3">
            <div className="servicios box-servicios">
                <div>
                    <div className="servicios-espaciado">
                        <h3>Conoce nuestros productos</h3>
                        <p>Nuestros productos se ajustan a tus necesidades.</p>
                    </div>
                </div>
                <div className="card-flex">
                    <div>
                        <div className="text-center card-box">
                            <div className="member-card pt-2 pb-2">
                                <div className="thumb-lg member-thumb mx-left"><img src={circulo1} className="img-circulo-inicio" alt="profile-image"/></div>
                                <div>
                                    <h4 className="alineacion-izquierda" >Crédito Grupal</h4>
                                    <p>Es un crédito semilla para capital de trabajo que se otorga a un grupo de personas (10 mínimo) a quienes se les ofrece diferentes montos de...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="servicios-card">
                        <div className="text-center card-box">
                            <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-left"><img src={circulo2} className="img-circulo-inicio" alt="profile-image"/></div>
                                    <div>
                                        <h4 className="alineacion-izquierda">Crédito Paralelo</h4>
                                        <p>Es un crédito complemento que se les otorga a las clientes del crédito grupal a partir de su 3ra renovación tomando en cuenta su historial...</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="servicios-card">
                        <div className="text-center card-box">
                                <div className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-left"><img src={circulo3} className="img-circulo-inicio" alt="profile-image"/></div>
                                    <div>
                                        <h4 className="alineacion-izquierda">Crédito Personal</h4>
                                        <p>Es un Crédito que se otorga a nuevas clientes que tengan un negocio ya sea de servicios, comercial o productivo, para acceder a este...</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="box-boton-detalle">
                <button className="btn btn-outline-light">Ver más detalles</button>
            </div>
    </div>
  	)
  }
 
}
 
export default InicioSeccionThree;