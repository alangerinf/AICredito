import React, {Component} from 'react';
import '../nosotros/NosotrosSeccionTwo.css';

class NosotrosSeccionTwo extends Component {
 
  render() {
 
   
  	return (
        <div className="container-fluid back-block-2-nosotros">
        <div className="row espacio-block-2-nosotros" >
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
             <div className="row ayuda">
                 <div className="col-sm-6">
                    <h3 className="titulos-azul">Apostamos por ustedes</h3>
                 </div>
                 <div className="col-sm-6">
                     <p className="nosotros-info">Creemos en la capacidad emprendedora de todos los peruanos y en AIC queremos darte ese impulso a seguir creyendo y creciendo en tu negocio, con el objetivo de dar siempre lo mejor a tu familia, queremos decirte que puedes contar con nosotros para impulsar ese sueño que tienes en mente.</p>
                 </div>
             </div>
            </div>
            <div className="col-sm-2"></div>
        </div>
    </div>

  	)
    
  }
 
}
 
export default NosotrosSeccionTwo;