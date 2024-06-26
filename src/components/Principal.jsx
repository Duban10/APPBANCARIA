import { useState, useEffect } from 'react'
import Header from './Header'
import Filtros from './Filtros'
import ListadoGastos from './ListadoGastos'
import Modal from './Modal'
import { generarId, numeroCuenta } from '../helpers'
import IconoNuevoGasto from '../img/nuevo-gasto.svg'

function Principal() {

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  const [numberCount, setNumberCount] = useState()

  

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ) {
        setModal(true)

        setTimeout(() => {
            setAnimarModal(true)
        }, 500);
    }
  }, [ gastoEditar ])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if(filtro) {
        const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)
        setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto'));

    if(presupuestoLS > 0 ) {
      setIsValidPresupuesto(true)
    }
    setNumberCount(numeroCuenta())
  }, []);
  


  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
        setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    if(gasto.id) {
      // Actualizar
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
      setGastoEditar({})
    } else {
      // Nuevo Gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto ])
    }
    setAnimarModal(false)
    setTimeout(() => {
        setModal(false)
    }, 500);
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  }
  console.log('numberCount:::::', numberCount)

  return (
      <div className={modal ? 'fijar' : '' }>
        <Header 
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            isValidPresupuesto={isValidPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
            numberCount={numberCount}
        />

        {isValidPresupuesto && (
          <>
            <main>
              <Filtros 
                filtro={filtro}
                setFiltro={setFiltro}
              />
              <ListadoGastos 
                  gastos={gastos}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                  filtro={filtro}
                  gastosFiltrados={gastosFiltrados}
              />
            </main>
            <div className="nuevo-gasto">
                <img 
                    src={IconoNuevoGasto}
                    alt="icono nuevo gasto"
                    onClick={handleNuevoGasto}
                />
            </div>
          </>
        )}

        {modal && <Modal 
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGasto={guardarGasto}
                    gastoEditar={gastoEditar}
                    setGastoEditar={setGastoEditar}
                  />}

      </div>
  )
}

export default Principal
