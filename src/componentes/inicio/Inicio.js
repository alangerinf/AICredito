import React, {Component} from 'react';
import InicioSeccionOne from './InicioSeccionOne.js';
import InicioSeccionTwo from './InicioSeccionTwo.js';
import InicioSeccionThree from './InicioSeccionThree.js';
import InicioSeccionFour from './InicioSeccionFour.js';
import Ayuda from '../ayuda/Ayuda.js';

class Inicio extends Component {
 
  render() {
 
   
  	return (
        <div>
            <InicioSeccionOne/>
            <InicioSeccionTwo/>
            <InicioSeccionThree />
            <InicioSeccionFour />
            <Ayuda/>
        </div>
  	)
    
  }
 
}
 
export default Inicio;