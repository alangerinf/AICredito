import React, {useState} from 'react';
import contactanos from '../../img/img_contactanos.png';
import '../contactanos/Contactanos.css';
import appFirebaseAiCredito from '../../credenciales';
import {getFirestore, collection, addDoc, doc} from 'firebase/firestore';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util';

const db = getFirestore(appFirebaseAiCredito)
const MySwal = withReactContent(Swal)

const Contactanos = () => {
 
    
    const contactanosInicial = {
        nombre: '',
        email: '',
        telefono: '',
        dni: '',
        giroNegocio: '',
        mensaje: ''
    }

    const mensajeError = {
        errorNombre: '',
        errorEmail: '',
        errorTelefono: '',
        errorDni: '',
        errorGiro: '',
        errorMensaje: ''
    }

    const validarContactanos= (contactanosInicial) => {
        const mensajeError = {
            errorNombre: '',
            errorEmail: '',
            errorTelefono: '',
            errorDni: '',
            errorGiro: '',
            errorMensaje: ''
        }
     
        if(!contactanosInicial.nombre.trim()){
            setFallo(true);
            setEnombre('input-error')
            mensajeError.errorNombre = 'Falta Nombre'
        }else{
            setEnombre('');
        }
        if(!contactanosInicial.email.trim()){
            setFallo(true);
            setEemail('input-error')
            mensajeError.errorEmail = 'Falta email';
        }
        else{
            setEemail('');
        }
        if(!contactanosInicial.telefono.trim()){
            setFallo(true);
            setEtelefono('input-error')
            mensajeError.errorTelefono = 'Falta telefono';
        }
        else{
            setEtelefono('');
        }
        if(!contactanosInicial.dni.trim()){
            setFallo(true);
            setEdni('input-error')
            mensajeError.errorDni = 'Falta dni';
        }
        else{
            setEdni('');
        }
        if(!contactanosInicial.giroNegocio.trim()){
            setFallo(true);
            setEgiro('input-error')
            mensajeError.errorGiro = 'Falta giro';
        }
        else{
            setEgiro('');
        }
        if(!contactanosInicial.mensaje.trim()){
            setFallo(true);
            setEmensaje('input-error')
            mensajeError.errorMensaje = 'Falta mensaje';
        }else{
            setEmensaje('');
        }

        return mensajeError
    }
    
    const [contacto, setContacto] = useState(contactanosInicial)
    const [fallo, setFallo] = useState(false)
    const [eNombre, setEnombre] = useState('')
    const [eEmail, setEemail] = useState('')
    const [eTelefono, setEtelefono] = useState('')
    const [eDNI, setEdni] = useState('')
    const [eGiro, setEgiro] = useState('')
    const [eMensaje, setEmensaje] = useState('')
    const [errorContactanos, setError] = useState(mensajeError)
    const capturarInputs = (e) => {
        const {name, value} = e.target;
        setContacto({...contacto, [name]:value})
    }



    const guardarDatos = async(e) => {
        e.preventDefault();
        setError(validarContactanos(contacto))
       
        if(contacto.nombre !== '' && contacto.email !== '' && contacto.telefono !== '' && contacto.dni !== '' && contacto.giroNegocio !== '' && contacto.mensaje !== ''){
            try {
                await addDoc(collection(db, 'contactanos'),{
                    ...contacto
                })
                MySwal.fire({
                    title: <strong>¡Mensaje enviado!</strong>,
                    html: <i>Gracias por su preferencia.</i>,
                    icon: 'success'
                })
            } catch (error) {
                console.log(error)
            }
            setContacto({...contactanosInicial})
        }
        
    }

  	return (
        <div className="container-fluid">
        <div className="contactanos">
            <div className="img-contactanos">
                <img src={contactanos} alt=""/>
            </div>
            <div className="card mt-5 card-contactanos ">
                    <div className="card-body">
                        <h3>Contáctanos</h3>
                        <form onSubmit={guardarDatos}>
                            <div className="row">
                                <div className="col-sm-6 padd-bottom">
                                    <label for="">Nombre: </label>
                                    <input type="text" name="nombre" placeholder='Ejm. Alexander Llanos' className={`form-control transpa ${eNombre}`}
                                     onChange={capturarInputs} value={contacto.nombre} />
                                    { errorContactanos.errorNombre ? (<span className="error">{errorContactanos.errorNombre}</span>) : (<span></span>)}
                                </div>
                                <div className="col-sm-6 padd-bottom">
                                    <label for="">Email: </label>
                                    <input type="text" name="email" placeholder='Ejm. nombre@correo.com' className={`form-control transpa ${eEmail}`}
                                    onChange={capturarInputs} value={contacto.email}/>
                                    { errorContactanos.errorEmail ? (<span className="error">{errorContactanos.errorEmail}</span>) : (<span></span>)}
                                </div>
                                    
                                <div className="col-sm-4 top-label">
                                    <label for="">Teléfono: </label>
                                    <input type="text" name="telefono" placeholder='Ejm. 911 111 111' className={`form-control transpa ${eTelefono}`} onChange={capturarInputs} value={contacto.telefono}/>
                                    { errorContactanos.errorTelefono ? (<span className="error">{errorContactanos.errorTelefono}</span>) : (<span></span>)}
                                </div>
                                <div className="col-sm-4 top-label">
                                    <label for="">DNI: </label>
                                    <input type="text" name="dni" placeholder='Ejm. 7654321' className={`form-control transpa ${eDNI}`} onChange={capturarInputs} value={contacto.dni}/>
                                    { errorContactanos.errorDni ? (<span className="error">{errorContactanos.errorDni}</span>) : (<span></span>)}
                                </div>
                                <div className="col-sm-4 top-label">
                                    <label for="">Giro de negocio: </label>
                                    <select className={`form-control transpa ${eGiro}`} name="giroNegocio" onChange={capturarInputs} value={contacto.giroNegocio}>
                                        <option className="top-label" value="" selected>Seleccione</option>
                                        <option value="Servicios">Servicios</option>
                                        <option value="Comercio">Comercio</option>
                                        <option value="Producción">Producción</option>
                                        <option value="Otros">Otros</option>
                                    </select>
                                    { errorContactanos.errorGiro ? (<span className="error">{errorContactanos.errorGiro}</span>) : (<span></span>)}
                                </div>
                                <div className="col-sm-12 top-label">
                                    <label for="">Mensaje: </label>
                                    <textarea name="mensaje" placeholder='Cuentanos más sobre tu negocio' className={`form-control transpa ${eMensaje}`} cols="30" rows="3" onChange={capturarInputs} value={contacto.mensaje}></textarea>
                                    { errorContactanos.errorMensaje ? (<span className="error">{errorContactanos.errorMensaje}</span>) : (<span></span>)}
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

  	)
}    
  
 

 
export default Contactanos;