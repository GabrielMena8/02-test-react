import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


export const ControlPresupuesto = ({gastos,presupuesto}) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  const formatMoney = (amount) => {
    return amount.toLocaleString('en-US', 
    {style: 'currency', currency: 'USD'})
  }

  useEffect(() => {
    const total = gastos.reduce( (total,gasto)=> Number(gasto.cantidad) +total, 0);
    setGastado(total)
    setDisponible(Number(presupuesto) - total)

    const porcentaje = (((presupuesto - total) / presupuesto) * 100)
    setPorcentaje(Number(porcentaje))

  }, [gastos])
    

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
          <p> Grafica</p>

          <CircularProgressbar
            value={porcentaje}
            text='Presupuesto'
            styles={buildStyles({
              textSize: '20px',
              pathColor: '#007bff',
              textColor: '#007bff'
            })}
          />
      </div>


      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto: </span>{formatMoney(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo': ''} `}>
          <span>Disponible: </span>{formatMoney(disponible)}
        </p>
        <p>
          <span> Gasto: </span>{formatMoney(gastado)}
        </p>
      </div>
    </div>
  )
}
