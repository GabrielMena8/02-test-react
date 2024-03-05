import React from 'react'
import { Presupuesto } from './Presupuesto'
import { ControlPresupuesto } from './ControlPresupuesto'


export const Header = ({presupuesto, setPresupuesto, 
                        isValid, setIsValid, gastos}) => {
  return (
    <header>
        <h1>Control de gastos</h1>

        {
            isValid ? (
               <ControlPresupuesto 
                gastos={gastos}
                presupuesto={presupuesto}/>
            ):(
            <Presupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValid={setIsValid}
            />
            
            )
        }
        
       
    </header>
  )
}
