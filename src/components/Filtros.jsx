import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {


    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label>Filtros</label>
                    <select
                        value={filtro}
                        onChange={e => setFiltro(e.target.value) }
                    >
                        <option value="">-- Todas las Categorías --</option>
                        <option value="deposito">Depositos</option>
                        <option value="transferencia">Tranferencia</option>
                        <option value="retiro">Retiros</option>
                        
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
