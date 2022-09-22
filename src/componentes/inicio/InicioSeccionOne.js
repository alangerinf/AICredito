import React, {useState} from 'react';
import { If, Then, Else } from 'react-if';
import '../inicio/InicioSeccionOne.css';
import appFirebaseAiCredito from '../../credenciales';
import {getFirestore, collection, addDoc, doc} from 'firebase/firestore';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const db = getFirestore(appFirebaseAiCredito)
const MySwal = withReactContent(Swal)

const InicioSeccionOne = () => {
 
    const simulacionInicial = {
        tipo: 'Personal',
        moneda: 'Soles',
        monto: 0.00,
        plazo: 9,
        ingresosPromedio: '',
        dni: '76543452',
        email: ''
    }

    const mensajeError = {
        errorIngresos: '',
        errorDni: '',
        errorEmail: ''
    }

    const validarSimulacion= (simulacionInicial) => {
        const mensajeError = {
            errorIngresos: '',
            errorDni: '',
            errorEmail: ''
        }
     
        if(!simulacionInicial.ingresosPromedio.trim()){
            setEingresosPromedio('input-error')
            mensajeError.errorIngresos = 'Falta ingresos'
        }else{
            setEingresosPromedio('');
        }
        if(!simulacionInicial.dni.trim()){
            setEdni('input-error')
            mensajeError.errorDni = 'Falta dni';
        }
        else{
            setEdni('');
        }
        if(!simulacionInicial.email.trim()){
            setEemail('input-error')
            mensajeError.errorEmail = 'Falta email';
        }
        else{
            setEemail('');
        }
        return mensajeError
    }

    const obtenerCuota = (simulacion) => {
        let tasa = 0
        if(simulacion.tipo == 'Personal'){
            tasa = 0.0470
        }else{
            tasa = 0.0265
        }

        let x = Math.pow((1 + tasa ),simulacion.plazo)
        let numerador = simulacion.monto*tasa*x
        let denominador = x - 1
        let cuota = numerador/denominador
        return Math.round(cuota);
    }
    
    const [simulacion, setSimulacion] = useState(simulacionInicial)
    const [cuota, setCuota] = useState('')
    const [habilitar, setHabilitar] = useState(true)

    const [eingresosPromedio, setEingresosPromedio] = useState('')
    const [eDNI, setEdni] = useState('')
    const [eEmail, setEemail] = useState('')

    const [errorSimulacion, setError] = useState(mensajeError)

    const capturarInput = (e) => {
        const {name, value} = e.target;
        setSimulacion({...simulacion, [name]:value})
        console.log(simulacion)
    }

    const guardar = async(e) => {
        e.preventDefault();
        setError(validarSimulacion(simulacion))
        if(simulacion.dni !== '' && simulacion.ingresosPromedio !== '' && simulacion.email !== ''){
            //setSimulacion({...simulacionInicial})
            setHabilitar(false)
            setCuota(obtenerCuota(simulacion))
        }
    }

    const nuevaCotizacion = () =>{
        setSimulacion({...simulacionInicial})
        setHabilitar(true)
    }

    const enviarDatos = async(e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'cotizaciones'),{
                    ...simulacion
            })
                MySwal.fire({
                title: <strong>¡Cotización enviada!</strong>,
                html: <i>Nos pondremos en contacto con usted, gracias por su preferencia.</i>,
                icon: 'success'
            })
        } catch (error) {
            console.log(error)
        }
    }

  	return (
        <div className="container-fluid principal">
            <div className="cabezera-inicio ">
                <div className="texto-principal">
                    <strong><h1>TENEMOS LO QUE NECESITAS PARA CRECER</h1></strong>
                    <p className="principal-texto principal-texto-inicio">Queremos verte surgir, es por eso que te asesoramos y apoyamos para que puedas cumplir con las metas que te propones.</p>
                </div>
                <div className="inicio-fondo">
                    <div className="card card-inicio">
                        <div className="card-body">
                            <If condition={habilitar}>
                                <Then>
                            <form onSubmit={guardar} >
                                <div className="row">
                                        <div className="col-sm-12">
                                            <h3 className="titulos-azul inicio-cabezera">Simula tu préstamo</h3>
                                            <select className="fornm-control selector-tipo-prestamo" name="tipo" onChange={capturarInput} value={simulacion.tipo}>
                                                <option value="Personal">Personal</option>
                                                <option value="Grupal">Grupal</option>
                                            </select>
                                        </div>
                                        <div className="col-6 text-center">
                                            <label>Moneda: </label> <br/>
                                            <div className="moneda-flex radio">
                                                <div>
                                                    <input label="Soles" type="radio" id="Soles" name="moneda" value="Soles" checked={simulacion.moneda === 'Soles'? true:false}
                                                      onChange={capturarInput} />
                                                </div>
                                                <div>
                                                    <input label="Dolares" type="radio" id="Dolares" name="moneda" value="Dolares" checked={simulacion.moneda === 'Dolares'? true:false} 
                                                     onChange={capturarInput}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 text-center">
                                            <label>Monto:</label>
                                            <p className="formulario-p range-espacio"><If condition={simulacion.moneda == 'Soles'}><Then>S/. </Then><Else>$/. </Else></If>{simulacion.monto}</p>
                                            <If condition={simulacion.moneda == 'Soles'}>
                                                <Then><input min={0} max={10000} defaultValue={0} type="range" id="ran" name="monto" onChange={capturarInput} step="0.01" /></Then>
                                                <Else><input min={200} max={2500} defaultValue={200} type="range" id="ran" name="monto" onChange={capturarInput} step="0.01" /></Else>
                                            </If>
                                        </div>
                                        <div className="col-6">
                                            <label>Plazo: </label>
                                            <p className="formulario-p range-espacio">{simulacion.plazo} meses</p>
                                            <input min={1} max={18} type="range" id="ran" name="plazo" onChange={capturarInput}/>
                                        </div>
                                        <div className="col-6">
                                            <label>Ingresos promedio:</label>
                                            <input type="number" step="0.01" placeholder="S/ 0.00" name="ingresosPromedio" 
                                            className={`form-control input-ingreso ${eingresosPromedio}`} 
                                            onChange={capturarInput} value={simulacion.ingresosPromedio}  />
                                             { errorSimulacion.errorIngresos ? (<span className="error">{errorSimulacion.errorIngresos}</span>) : (<span></span>)}
                                        </div>
                                        <div className="col-6 text-left">
                                            <label>DNI: </label>
                                            <input type="text" className={`form-control input-dni ${eDNI}`} name="dni"
                                            onChange={capturarInput} value={simulacion.dni}/>
                                             { errorSimulacion.errorDni ? (<span className="error">{errorSimulacion.errorDni}</span>) : (<span></span>)}
                                        </div>
                                        <div className="col-6  text-left">
                                            <label>Email: </label>
                                            <input type="text" placeholder="Ejem. n@correo.co" className={`form-control input-email ${eEmail}`} name="email"
                                             onChange={capturarInput} value={simulacion.email}/>
                                            { errorSimulacion.errorEmail ? (<span className="error">{errorSimulacion.errorEmail}</span>) : (<span></span>)}
                                        </div>
                                        <div className="col-sm-12 mt-2">
                                            <button className="btn btn-primary btn-block">Cotizar</button>
                                        </div>
                                    
                                </div>
                            </form>
                            </Then>
                                <Else>
                                <div className="row">
                                        <div className="col-12">
                                            <h3 className="titulos-azul inicio-cabezera">Simula tu préstamo</h3>
                                            <p className="selector-tipo-prestamo">{simulacion.tipo}</p>
                                        </div>
                                        
                                        <div className="col-6 simulacion-background-left-monto simulacion-izquierda">
                                            <span className="simulacionSpan">Monto: </span>
                                        </div>
                                        <div className="col-6 simulacion-background-left-monto">
                                            <span className="simulacionResultado"><If condition={simulacion.moneda == 'Soles'}><Then>S/. </Then><Else>$/. </Else></If> {simulacion.monto} </span>   
                                        </div>
                                        <div className="col-6 simulacion-background-left-plazo simulacion-izquierda">
                                            <span className="simulacionSpan">Plazo: </span>
                                        </div>
                                        <div className="col-6 simulacion-background-left-plazo">
                                            <span className="simulacionResultado ">{simulacion.plazo} meses </span>
                                        </div>
                                        <div className="col-6 simulacion-background-left-cuota simulacion-izquierda">
                                            <span className="simulacionSpan">Valor de Cuota: </span>
                                        </div>
                                        <div className="col-6 simulacion-background-left-cuota">
                                            <span className="simulacionCuota"><If condition={simulacion.moneda == 'Soles'}><Then>S/. </Then><Else>$/. </Else></If> {cuota}</span>
                                        </div>
                                        <div className="col-12 leyenda1">
                                            <span className="simulacion-leyenda">*Monto esta sugeto a evaluacion personal.</span>
                                        </div>
                                        <div className="col-12 leyenda2">
                                            <span className="simulacion-leyenda">*Monto de la cuota.</span>
                                        </div>
                                    
                                        <div className="col-sm-12 mt-5">
                                            <button className="btn btn-primary btn-block" onClick={enviarDatos}>Lo quiero</button>
                                        </div>

                                        <div className="col-sm-12 mt-3" >
                                            <a onClick={nuevaCotizacion} className="cotizar-button">Cotizar otro monto</a>
                                        </div>
                                    
                                </div>
                                </Else>
                            </If>
                        </div>
                    </div>
                </div>
            </div>
    </div> 		
 
  	)
    

}
 
export default InicioSeccionOne;