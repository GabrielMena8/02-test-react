import React from 'react'

export const ControlPresupuesto = ({presupuesto}) => {


  const formatMoney  = (amount) => {
    return amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
          <p> Grafica</p>
      </div>


      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto: </span>{formatMoney(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>{formatMoney(0)}
        </p>
        <p>
          <span>Gasto: </span>{formatMoney(0)}
        </p>
      </div>
    </div>
  )
}
