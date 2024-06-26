import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({ 
    gastos,
    setGastos,
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto,
    numberCount
}) => {
    return (
        <header>
            <h1>Movimientos Bancarios</h1>

            {isValidPresupuesto ? (
                <ControlPresupuesto 
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                    numberCount={numberCount}
                />
            ) : (
                <NuevoPresupuesto 
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto }
                />
            )}

        </header>
    )
}

export default Header
