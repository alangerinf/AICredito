import React, {Component} from 'react';
import circulo from '../../img/img_servicios.png';
import circulo1 from '../../img/circulo1.png';
import circulo2 from '../../img/circulo2.png';
import circulo3 from '../../img/circulo3.png';
import '../servicios/ServiciosSeccionTwo.css';

class ServiciosSeccionTwo extends Component {
 
  render() {
 
   
  	return (
        <div className="container-fluid servicios-two-fondo">
        <div className="row ayuda-servicios">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 text-center">
                <sub >SERVICIOS</sub>
                <h3 className="titulos-azul-servicios">Disfruta de los grandes
                    beneficios de tu Crédito</h3>
            </div>
            <div className="col-sm-4"></div>
        </div>
        <div className="espaciado-bajo-servicios">
            <div className="contenido-servicios-2">
                <div>
                    <div className="card-box">
                        <div className="member-card pt-2 pb-2">
                            <div className="thumb-lg member-thumb mx-left"><img className="circulos" src={circulo1} alt="profile-image"/></div>
                            <div>
                                <h4 className="alineacion-izquierda-servicios">Crédito Grupal</h4>
                                <p>Es un crédito semilla para capital de trabajo que se otorga a un grupo de personas (10 minimo) a quienes se les ofrece diferentes montos de acuerdo a la evaluación de sus ingresos, y giro de negocio, este crédito dura solo 4 meses, durante ese tiempo se realizan 8 pagos en total, debido a que se cancela con frecuencia catorcenal (14 dias)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card-box">
                        <div className="member-card pt-2 pb-2">
                            <div className="thumb-lg member-thumb mx-left"><img className="circulos" src={circulo2} alt="profile-image2"/></div>
                            <div>
                                <h4 className="alineacion-izquierda-servicios">Crédito Paralelo</h4>
                                <p>Es un crédito complemento que se les otorga a las clientes del crédito grupal a partir de su 3ra renovación tomando en suenta su historial dentro del grupo, su historial en la central de riesgo, giro de negocio y capacidad de pago. Este crédito se cancela de manera mensual.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card-box">
                        <div className="member-card pt-2 pb-2">
                            <div className="thumb-lg member-thumb mx-left"><img className="circulos" src={circulo3} alt="profile-image3"/></div>
                            <div>
                                <h4 className="alineacion-izquierda-servicios">Crédito Personal</h4>
                                <p>Es un Crédito que se otorga a nuevas clientes que tengan un negocio ya sea de servicios, comercial o productivo, para acceder a este crédito un asesor hará la evaluación integralmente con la finalidad de ofrecer el monto de crédito que mejor se ajuste a sus necesidades.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  	)
    
  }
 
}
 
export default ServiciosSeccionTwo;