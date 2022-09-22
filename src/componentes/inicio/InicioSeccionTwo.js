import React, {Component} from 'react';
import nosotros from '../../img/img_nosotros.png';
import '../inicio/InicioSeccionTwo.css';

class InicioSeccionTwo extends Component {
 
  render() {
 
   
  	return (
        <div className="container-fluid contenedor-inicio-2">
            <div className="contenido-inicio-2 nosotros-background">
                <div className="box-img-inicio-2 iz">
                    <img src={nosotros} alt="" className="img-fluid"/>
                </div>
                <div className="box-contenido-inicio-2 iz nosotros">
                    <h3 className="titulos-azul">Apostamos por ustedes</h3>
                    <p>Creemos en la capacidad emprendedora de todos los peruanos y en AIC queremos darte ese impulso a seguir creyendo y creciendo en tu negocio, con el objetivo de dar siempre lo mejor a tu familia, queremos decirte que puedes contar con nosotros para impulsar ese sueño que tienes en mente.</p>
                </div>
            </div>
        </div>
  	)
  }
 
}
 
export default InicioSeccionTwo;