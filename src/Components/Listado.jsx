import React from 'react'
import { Gasto } from './Gasto'

export const Listado = ({gastos, setGastoEditado, eliminarGasto}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>
            {gastos.length === 0 ? 'No hay gastos' : 'Listado de gastos'}
            {gastos.map(gasto => (
                <Gasto
                    setGastoEditado={setGastoEditado}
                    key={gasto.id}
                    gasto={gasto}
                    eliminarGasto={eliminarGasto}
                                    />
            ))}

        </h2>


    </div>

  )
}
