import React, {Component} from 'react';
import NosotrosSeccionOne from './NosotrosSeccionOne';
import NosotrosSeccionTwo from './NosotrosSeccionTwo';
import NosotrosSeccionThree from './NosotrosSeccionThree';
import Ayuda from '../ayuda/Ayuda';

class Nosotros extends Component {
 
  render() {
 
   
  	return (
        <div>
            <NosotrosSeccionOne/>
            <NosotrosSeccionTwo/>
            <NosotrosSeccionThree/>
            <Ayuda/>
        </div>
  	)
    
  }
 
}
 
export default Nosotros;