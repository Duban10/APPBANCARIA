import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({
    setModal, 
    setAnimarModal, 
    animarModal, 
    guardarGasto, 
    gastoEditar,
    setGastoEditar 
}) => {
    
    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')


    // ENVIAR LO QUE ESTA EN EL OBJETO A LOS INPUT PARA EDITAR
    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setFecha(gastoEditar.fecha)
            setId(gastoEditar.id)
          }
    }, [])
    

    const ocultarModal = () => {
       
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000)
            return;
        }

        guardarGasto({nombre, cantidad, categoria, fecha, id})
    }

    


  return (
    <div className="modal">
        <div className="cerrar-modal">
          <img 
            src={CerrarBtn} 
            alt="Cerrar Modal" 
            onClick={ocultarModal}/>
        </div>
        {/* colocar y quitar clase dinamicamente 
        - formulario es estatica - animar y cerrar es dinamica */}
         <form 
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
            >
                <legend>{gastoEditar.nombre ? 'Editar Movimiento':'Nuevo Movimiento'}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre del Banco</label>

                    <input 
                        id="nombre"
                        type="text"
                        placeholder="Añade el Nombre del Banco"
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>

                    <input 
                        id="cantidad"
                        type="number"
                        placeholder="Añade La cantidad: ej. 300"
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Tipo de Movimiento</label>

                    <select
                        id="categoria"
                        value={categoria}
                        onChange={ e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Todas las Categorías --</option>
                        <option value="deposito">Depositos</option>
                        <option value="transferencia">Tranferencia</option>
                        <option value="retiro">Retiros</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value={gastoEditar.nombre ? 'Guardar Cambios':'Añadir Movimiento'}
                />

            </form>
    </div>
  )
}

export default Modal
