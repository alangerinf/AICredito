import React, {useState} from 'react';
import '../servicios/ServiciosSeccionFour.css';
import appFirebaseAiCredito from '../../credenciales';
import {getFirestore, collection, addDoc, doc} from 'firebase/firestore';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { NavLink } from "react-router-dom";
import { async } from '@firebase/util';

const db = getFirestore(appFirebaseAiCredito)
const MySwal = withReactContent(Swal)

const ServiciosSeccionFour = () => {

  const transparenciaInicial = {
    nombre: '',
    dni: '',
    celular: '',
    mensaje: ''
  }

  const mensajeError = {
      errorNombre: '',
      errorDni: '',
      errorCelular: '',
      errorMensaje: ''
  }

  const validarTransparencia= (transparenciaInicial) => {
    const mensajeError = {
      errorNombre: '',
      errorDni: '',
      errorCelular: '',
      errorMensaje: ''
    }
 
    if(!transparenciaInicial.nombre.trim()){
        setEnombre('input-error')
        mensajeError.errorNombre = 'Falta Nombre'
    }else{
        setEnombre('');
    }
    if(!transparenciaInicial.celular.trim()){
        setEcelular('input-error')
        mensajeError.errorCelular = 'Falta celular';
    }
    else{
        setEcelular('');
    }
    if(!transparenciaInicial.dni.trim()){
        setEdni('input-error')
        mensajeError.errorDni = 'Falta dni';
    }
    else{
        setEdni('');
    }
    if(!transparenciaInicial.mensaje.trim()){
        setEmensaje('input-error')
        mensajeError.errorMensaje = 'Falta mensaje';
    }else{
        setEmensaje('');
    }

    return mensajeError
  }

  const [transparencia, setTransparencia] = useState(transparenciaInicial)
    const [errNombre, setEnombre] = useState('')
    const [errCelular, setEcelular] = useState('')
    const [errDNI, setEdni] = useState('')
    const [errMensaje, setEmensaje] = useState('')
    const [errorTransparencia, setError] = useState(mensajeError)
    const capturar = (e) => {
        const {name, value} = e.target;
        setTransparencia({...transparencia, [name]:value})
    }

    const guardarTransparencia = async(e) => {
      e.preventDefault();
      setError(validarTransparencia(transparencia))
     
      if(transparencia.nombre !== '' && transparencia.dni !== '' && transparencia.celular !== ''  && transparencia.mensaje !== ''){
          try {
              await addDoc(collection(db, 'transparencia'),{
                  ...transparencia
              })
              MySwal.fire({
                  title: <strong>¡Mensaje enviado!</strong>,
                  html: <i>Gracias por su preferencia.</i>,
                  icon: 'success'
              })
          } catch (error) {
              console.log(error)
          }
          setTransparencia({...transparenciaInicial})
      }
      
  }

 
  	return (
        <div className="container-fluid">
        <div className="row servicios-tab">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#ofrece" role="tab" aria-controls="ofrece" aria-selected="true">¿Qué me ofrece?</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/preguntas-frecuentes" className="nav-link">¿Cómo lo pido?</NavLink>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contact-tab" data-toggle="tab" href="#transparencia" role="tab" aria-controls="transparencia" aria-selected="false">Transparencia</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/preguntas-frecuentes" className="nav-link">Tengo dudas</NavLink>
                      </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="ofrece" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row margen-tabs-servicios">
                            <div className="col-sm-2 titulo-servicio-tab">Facilidad</div>
                            <div className="col-sm-10 cuerpo-servicio-tab">Hacemos más fácil el acceso para tu capital semilla, solo contáctanos y nosotros nos encargamos de evaluarte integralmente con el objetivo de darte un producto de acuerdo a tu necesidad. </div>


                            <div className="col-sm-2 titulo-servicio-tab m60">Educación</div>
                            <div className="col-sm-10 cuerpo-servicio-tab m60">En cada desembolso nuestros asesores(a) son profesionales que te podrán orientar a través de un pequeño taller de finanzas personales el manejo correcto de tus ingresos y gastos con la finalidad de que puedas conocer el crecimiento de tu negocio y que mejoras poder implementar.</div>

                            <div className="col-sm-2 titulo-servicio-tab m60">Asesoria personalizada</div>
                            <div className="col-sm-10 cuerpo-servicio-tab m60">En cada paso desde la capacitación hasta los pagos su asesor(a) estará para poder resolver cualquier duda que tenga sobre el préstamo, además ponemos a su disposición nuestras cuentas sociales donde gustosamente le responderemos</div>


                            <div className="col-sm-2 titulo-servicio-tab m60">Canales</div>
                            <div className="col-sm-10 cuerpo-servicio-tab m60">Gracias a una red extensa de agencias BCP, podrá contar con diferentes canales (agentes, banca móvil,  oficinas, yape) para poder hacer sus operaciones, tenga en cuenta enviar su Boucher con su nombre a su asesor a fin que se pueda aplicar sus pagos correcta y oportunamente.</div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pido" role="tabpanel" aria-labelledby="profile-tab">...</div>

                    <div className="tab-pane fade" id="transparencia" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="trasparencia">
                      <div className="card mt-5 card-contactanos card-transparencia ">
                              <div className="card-body">
                                  <h3>Transparencia</h3>
                                  <form onSubmit={guardarTransparencia}>
                                      <div className="row">
                                          <div className="col-sm-4 top-label">
                                              <label for="">Nombre: </label>
                                              <input type="text" name="nombre" placeholder='Ejm. Alexander Llanos' className={`form-control transpa ${errNombre}`}
                                              onChange={capturar} value={transparencia.nombre} />
                                              { errorTransparencia.errorNombre ? (<span className="error">{errorTransparencia.errorNombre}</span>) : (<span></span>)}
                                          </div>
                                              
                                          <div className="col-sm-4 top-label">
                                              <label for="">DNI: </label>
                                              <input type="text" name="dni" placeholder='Ejm. 7654321' className={`form-control transpa ${errDNI}`} onChange={capturar} value={transparencia.dni}/>
                                              { errorTransparencia.errorDni ? (<span className="error">{errorTransparencia.errorDni}</span>) : (<span></span>)}
                                          </div>

                                          <div className="col-sm-4 top-label">
                                              <label for="">Celular: </label>
                                              <input type="text" name="celular" placeholder='Ejm. 911 111 111' className={`form-control transpa ${errCelular}`} onChange={capturar} value={transparencia.celular}/>
                                              { errorTransparencia.errorCelular ? (<span className="error">{errorTransparencia.errorCelular}</span>) : (<span></span>)}
                                          </div>

                                          <div className="col-sm-12 top-label">
                                              <label for="">Mensaje: </label>
                                              <textarea name="mensaje" placeholder='Cuentanos más sobre tu negocio' className={`form-control transpa ${errMensaje}`} cols="30" rows="3" onChange={capturar} value={transparencia.mensaje}></textarea>
                                              { errorTransparencia.errorMensaje ? (<span className="error">{errorTransparencia.errorMensaje}</span>) : (<span></span>)}
                                          </div>
                                          
                                              
                                          <div className="col-sm-3"></div>
                                          <div className="col-sm-6">
                                              <button className="btn btn-primary btn-block">Enviar</button>
                                          </div>
                                          <div className="col-sm-3"></div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="duda" role="tabpanel" aria-labelledby="contact-tab">...</div>
                  </div>
            </div>
            <div className="col-sm-1"></div>
        </div>
        
    </div>
  	)
    

 
}
 
export default ServiciosSeccionFour;