import React, {Component} from 'react';
import Ayuda from '../ayuda/Ayuda';
import ServiciosSeccionOne from './ServiciosSeccionOne';
import ServiciosSeccionTwo from './ServiciosSeccionTwo';
import ServiciosSeccionThree from './ServiciosSeccionThree';
import ServiciosSeccionFour from './ServiciosSeccionFour';

class Servicios extends Component {
 
  render() {
 
   
  	return (
        <div>
            <ServiciosSeccionOne/>
            <ServiciosSeccionTwo/>
            <ServiciosSeccionThree/>
            <ServiciosSeccionFour/>
            <Ayuda/>
        </div>
  	)
    
  }
 
}
 
export default Servicios;