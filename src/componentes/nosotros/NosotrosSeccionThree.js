import React, {Component} from 'react';
import bandera from '../../img/icon_bandera.png';
import estadistica from '../../img/icon_estadistica.png';
import '../nosotros/NosotrosSeccionThree.css';

class NosotrosSeccionThree extends Component {
 
  render() {
 
   
  	return (
        <div className="container-fluid">
        <div className=" block-3-nosotros-bottom">
            <div className="contenido-nosotros block-3-nosotros-margin">
                <div className="box-contenido-nosotros nosotros-card">
                    <div className="box-image"> 
                        <img src={bandera} className="img-fluid img-nosotros" alt=""/>
                    </div>
                    <div className="box-contenido">
                        <sub >Misión</sub>
                        <p className="texto-block-nosotros">Atender de manera oportuna las necesidades de financiamiento de nuestros clientes a través de un acompañamiento integral desde la capacitación, aprobación y desembolso del préstamo.</p>
                    </div>
                </div>
                <div  className="box-contenido-nosotros nosotros-card">
                    <div className="box-image">
                        <img src={estadistica}  className="img-fluid img-nosotros"  alt=""/>
                    </div>
                    <div className="box-contenido">
                        <sub>Visión</sub>
                        <p className="texto-block-nosotros">Reducir la exclusión financiera y el burocrático acceso al financiamiento de préstamos.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  	)
    
  }
 
}
 
export default NosotrosSeccionThree;