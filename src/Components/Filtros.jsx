import React from 'react'

import { useEffect, useState } from 'react'
export const Filtros = ({filtros, setFiltros}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <legend>Filtrar gastos</legend>
            <div className='campo'>
                <label htmlFor='categoria'>Categoria</label>
                <select name='categoria' id='categoria'
                    value={filtros}
                    onChange={e => setFiltros(e.target.value)}
                    >
                    <option value=''>-- Seleccione --</option>
                    <option value='comida'>Comida</option>
                    <option value='casa'>Casa</option>
                    <option value='salud'>Salud</option>
                    <option value='ocio'>Diversion</option>
                </select>
            </div>
        </form>
    </div>
  )
}
