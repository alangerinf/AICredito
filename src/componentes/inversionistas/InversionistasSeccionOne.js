import React, {Component} from 'react';
import inversionistas from '../../img/img_inversionistas.png';
import '../inversionistas/InversionistasSeccionOne.css';

class InversionistasSeccionOne extends Component {
 
  render() {
 
   
  	return (
        <div className="container-fluid">
        <div className="row principal-inversionista">
            <div className="col-sm-4 principal-inversionista-posicion">
                <strong><h1>LOREM IPSUM DOLOR SIT AMET ELIT</h1></strong>
                <p className="principal-texto-inversionista">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate deleniti quam corrupti.</p>
            </div>
            <div className="col-sm-8">

            </div>
            <div className="col-sm-12 img-inversionista">
                <img src={inversionistas} className="img-fluid"  alt=""/>
            </div>
        </div>
    </div>
  	)
    
  }
 
}
 
export default InversionistasSeccionOne;