import React, {Component} from 'react';
import serviciosPrestamo from '../../img/servicios_prestamo.png';
import '../servicios/ServiciosSeccionThree.css';

class ServiciosSeccionThree extends Component {
 
  render() {
 
   
  	return (
        <div className="container-fluid">
        <div className="row posicion-titulo-block-3-servicios">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                <h3 className="titulos-azul-3-servicios">Beneficios de tu préstamo grupal</h3>
            </div>
            <div className="col-sm-4"></div>
        </div>
        <div className="row tabla-servicios" >
            <div className="col-sm-4 alineacion-izq-block-3">
                <h2>Facilidad de pago</h2>
                <p>Podrás realizar tus pagos a nivel nacional desde tu: </p>
                <div className="pagos-tipos">
                    <ul>
                        <li>Banca móvil </li>
                        <li>Agentes BCP </li>
                        <li>Oficinas BCP</li>
                        <li>Yape</li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4 alineacion-der-block-3">
                <h2>Capacitación</h2>
                <p>Un asesor(a) te informará sobre que requisitos tendrás que presentar, la modalidad del crédito, así como las cuotas que pagarías de acuerdo al tiempo y monto, finalmente coordinará contigo la siguiente fecha de visita y se despedirá cordialmente. </p>
            </div>

            <div className="col-sm-4 alineacion-centro-block-3">
                <h2>Desembolso de crédito</h2>
                <p>Su asesor(a) les comunicará el día y la hora de su desembolso, en la cual cada integrante deberá indicar su número de cuenta donde se realizará el desembolso, de preferencia se pide cuenta en BCP, sin embargo, también pueden indicar de otros bancos. </p>
            </div>
            <div className="col-sm-4 img-prestamos">
                <img src={serviciosPrestamo} className="img-fluid" alt=""/>
            </div>
            <div className="col-sm-4 alineacion-centro-block-3">
                <h2>Arma tu grupo con personas de confianza</h2>
                <p>Podrás pedir información a tu asesor(a) sobre el récord crediticio de las aspirantes al grupo enviando su número de DNI (documento nacional de identidad) de tal manera que sepas como es su comportamiento de pago frente a otras entidades.</p>
            </div>

            <div className="col-sm-4 alineacion-izq-block-3" > <h2>Visitas de negocio</h2>
                <p>Después de haber realizado la primera reunión, el asesor coordinara una visita de su negocio y/o domicilio, a fin de completar su expediente y determinar montos finales para desembolso. </p></div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4 alineacion-der-block-3"> <h2>Solicitud de crédito</h2>
                <p>Su asesor(a) coordinara una reunión con todas las integrantes a fin de poder armar su expediente con los requisitos pedidos y con las solicitudes de crédito, donde sabremos que monto es el que necesita de acuerdo a su capacidad de pago.</p></div>
        
        </div>
    </div>
  	)
    
  }
 
}
 
export default ServiciosSeccionThree;