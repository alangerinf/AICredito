import React, {Component} from 'react';
import ayuda from '../../img/img_te_ayudamos.png';
import '../ayuda/Ayuda.css';

class Ayuda extends Component {
 
  render() {
 
   
  	return (
        <div className="container-fluid">
        <div className="row contacto">
            <div className="col-sm-3">
            </div>
            <div className="col-sm-6">
                <div className="row contacto-fondo">
                    <div className="col-sm-3">
                        <div className=""><img src={ayuda} alt="profile-image"/></div>
                    </div>
                    <div className="col-sm-9">
                        <h3 className="titulos-azul">Te cuidamos</h3>
                        <p>Recuerda que nuestros asesores siempre se identificaran antes de realizar una visita, y jamás te pedirán dinero para que puedas ingresar a un grupo.</p>
                        <button className="btn btn-primary">Ir al centro de ayuda</button>
                    </div>

                </div>
            </div>
            <div className="col-sm-3"></div>
        </div>
    </div>

  	)
    
  }
 
}
 
export default Ayuda;