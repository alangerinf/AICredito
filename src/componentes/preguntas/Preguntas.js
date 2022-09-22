import React, {Component} from 'react';
import mas from '../../img/mas.png';
import close from '../../img/close.png';
import '../preguntas/Preguntas.css';

class Preguntas extends Component {
 
    cerrarPregunta = () => {
        console.log('Di click al "X" ');
    }
   
  render() {

  	return (
        <div>
<div className="container-fluid">
        <div className="row ayuda-preguntas">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 text-center">
                <sub>AYUDA</sub>
                <h3 className="titulos-azul-preguntas">Preguntas frecuentes</h3>
            </div>
            <div className="col-sm-4"></div>
        </div>
        <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                <div id="accordion">
                    <div className="card">
                        <div className="card-header linea-azul titulo-contenedor" id="headingOne" >
                            <div>
                                <h5 className="mb-0">
                                    <button className="btn btn-link titulo-preguntas collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            <p>¿Cuáles son los requisitos para solicitar un préstamo?</p>
                                    </button>
                                </h5>
                            </div>
                            <div className="img-mas">
                                <img data-toggle="collapse" data-target="#collapseOne" src={mas} />
                            </div>
                        </div>
                        <div id="collapseOne" className="collapse contenido-preguntas" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body fondo-preguntas" >
                                <div className="titulo-contenedor">
                                    <div>
                                        <p className="titulo-body-preguntas">¿Cuáles son los requisitos para solicitar un préstamo?</p>
                                    </div>
                                    <div className="img-close" data-toggle="collapse" data-target="#collapseOne">
                                        <img   data-toggle="collapse" data-target="#collapseOne"  src={close} />
                                    </div>
                                </div>
                                <p className="body-preguntas">
                                Principalmente contar con:
                                    <ul>
                                        <li>Un negocio verificable con mínimo 3 meses de antigüedad </li>
                                        <li>Copia de DNI vigente</li>
                                        <li>Copia de recibo de servicio de su domicilio actual</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header linea-azul titulo-contenedor" id="headingTwo" >
                            <div>
                                <h5 className="mb-0">
                                    <button className="btn btn-link titulo-preguntas collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <p>¿Hasta cuántos familiares pueden estar en el grupo?</p>
                                    </button>
                                </h5>
                            </div>
                            <div className="img-mas">
                                <img data-toggle="collapse" data-target="#collapseTwo" src={mas} />
                            </div>
                        </div>
                        <div id="collapseTwo" className="collapse contenido-preguntas" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body fondo-preguntas" >
                                <div className="titulo-contenedor">
                                    <div>
                                        <p className="titulo-body-preguntas">¿Hasta cuántos familiares pueden estar en el grupo?</p>
                                    </div>
                                    <div className="img-close">
                                        <img data-toggle="collapse" data-target="#collapseTwo" src={close} />
                                    </div>
                                </div>
                                <p className="body-preguntas">
                                En el grupo solo se podrá aceptar hasta un máximo de 4 familiares con el segundo grado de consanguineidad, esto con la finalidad que el grupo sea disperso.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header linea-azul titulo-contenedor" id="headingThree" >
                            <div>
                                <h5 className="mb-0">
                                    <button className="btn btn-link titulo-preguntas collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <p>¿Hay una edad para poder acceder al préstamo?</p>
                                    </button>
                                </h5>
                            </div>
                            <div className="img-mas">
                                <img data-toggle="collapse" data-target="#collapseThree" src={mas} />
                            </div>
                        </div>
                        <div id="collapseThree" className="collapse contenido-preguntas" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body fondo-preguntas" >
                                <div className="titulo-contenedor">
                                    <div>
                                        <p className="titulo-body-preguntas">¿Hay una edad para poder acceder al préstamo?</p>
                                    </div>
                                    <div className="img-close">
                                        <img data-toggle="collapse" data-target="#collapseThree" src={close} />
                                    </div>
                                </div>
                                <p className="body-preguntas">
                                Si, hay un rango de edad para poder acceder al crédito, puedes ser calificada desde los 18 hasta los 65 años de edad, según DNI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header linea-azul titulo-contenedor" id="headingFour" >
                            <div>
                                <h5 className="mb-0">
                                    <button className="btn btn-link titulo-preguntas collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <p>¿Si estoy mal en el sistema poder acceder al crédito?</p>
                                    </button>
                                </h5>
                            </div>
                            <div className="img-mas">
                                <img data-toggle="collapse" data-target="#collapseFour" src={mas} />
                            </div>
                        </div>
                        <div id="collapseFour" className="collapse contenido-preguntas" aria-labelledby="headingFour" data-parent="#accordion">
                            <div className="card-body fondo-preguntas" >
                                <div className="titulo-contenedor">
                                    <div>
                                        <p className="titulo-body-preguntas">¿Si estoy mal en el sistema poder acceder al crédito?</p>
                                    </div>
                                    <div className="img-close">
                                        <img data-toggle="collapse" data-target="#collapseFour" src={close} />
                                    </div>
                                </div>
                                <p className="body-preguntas">
                                Creemos que los tropiezos son enseñanzas para mejorar, por ello damos segundas oportunidades, si en caso te encuentras mal en el sistema, serás evaluada para el crédito con la finalidad de ayudarte a mejorar tu calificación.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header linea-azul titulo-contenedor" id="headingFive" >
                            <div>
                                <h5 className="mb-0">
                                    <button className="btn btn-link titulo-preguntas collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            <p>¿Es necesario tener cuenta de ahorros en el BCP?</p>
                                    </button>
                                </h5>
                            </div>
                            <div className="img-mas">
                                <img data-toggle="collapse" data-target="#collapseFive" src={mas} />
                            </div>
                        </div>
                        <div id="collapseFive" className="collapse contenido-preguntas" aria-labelledby="headingFive" data-parent="#accordion">
                            <div className="card-body fondo-preguntas" >
                                <div className="titulo-contenedor">
                                    <div>
                                        <p className="titulo-body-preguntas">¿Es necesario tener cuenta de ahorros en el BCP?</p>
                                    </div>
                                    <div className="img-close">
                                        <img data-toggle="collapse" data-target="#collapseFive" src={close} />
                                    </div>
                                </div>
                                <p className="body-preguntas">
                                No es necesario, ya que podrá asignar el número de otra persona quien usted autorice, sin embargo, le sugerimos que pueda aperturarse una cuenta de ahorros personal, es gratis y solo le demora 5-10 minutos, recuerde que no solo es BCP también puede otorgar cuentas de otros bancos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header linea-azul titulo-contenedor" id="headingSix" >
                            <div>
                                <h5 className="mb-0">
                                    <button className="btn btn-link titulo-preguntas collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            <p>¿Cuándo me desembolsen o al momento de cancelar mis cuotas me cobraran alguna comisión?</p>
                                    </button>
                                </h5>
                            </div>
                            <div className="img-mas">
                                <img data-toggle="collapse" data-target="#collapseSix" src={mas} />
                            </div>
                        </div>
                        <div id="collapseSix" className="collapse contenido-preguntas" aria-labelledby="headingSix" data-parent="#accordion">
                            <div className="card-body fondo-preguntas" >
                                <div className="titulo-contenedor">
                                    <div>
                                        <p className="titulo-body-preguntas pregunta6 ">¿Cuándo me desembolsen o al momento de cancelar mis cuotas me cobraran alguna comisión?</p>
                                    </div>
                                    <div className="img-close">
                                        <img data-toggle="collapse" data-target="#collapseSix" src={close} />
                                    </div>
                                </div>
                                <p className="body-preguntas">
                                No, el cobro de tu desembolso es gratis y de igual manera el pago de tus cuotas no tiene un costo adicional, solo pagas el monto de tu cuota asignado en tu cronograma, y recuerda que ningún asesor puede recibir dinero.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-3"></div>
        </div>
    </div>
        </div>
  	)
    
  }
 
}
 
export default Preguntas;