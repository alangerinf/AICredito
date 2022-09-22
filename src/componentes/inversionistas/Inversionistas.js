import React, {Component} from 'react';

import Ayuda from '../ayuda/Ayuda';
import InversionistasSeccionOne from './InversionistasSeccionOne';
import InversionistasSeccionTwo from './InversionistasSeccionTwo';

class Inversionistas extends Component {
 
  render() {
 
   
  	return (
        <div>
          <InversionistasSeccionOne/>
          <InversionistasSeccionTwo/>
          <Ayuda/>
        </div>
  	)
    
  }
 
}
 
export default Inversionistas;