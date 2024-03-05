import { useState } from "react"
import { Mensaje } from "./Mensaje"

export const Presupuesto = ({presupuesto, setPresupuesto, setIsValid}) => {

    const [mensaje, setMensaje] = useState("")


    const handlePresupuesto = (e) => {
        e.preventDefault()


        if (!Number(presupuesto) || presupuesto < 0){
           setMensaje('Presupuesto no válido')
            return

        } 
        setMensaje('')
        setIsValid(true)
    

}
  
    return (
    <div className='contenedor-presupuesto contenedor sombra'>

        {/* <h2>Agrega tu presupuesto</h2> */}
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label htmlFor='presupuesto'>Presupuesto</label>
                <input id="presupuesto" type='number' className='nuevo-presupuesto' 
     
                    value={presupuesto}
                    onChange={e => setPresupuesto(Number(e.target.value))}
                />

            </div>

            <input type='submit' className='button-primary u-full-width' value='Definir presupuesto' />
            {mensaje && <Mensaje tipo='error'>
            
            {mensaje}
            </Mensaje>}
        </form>
     
    </div>
  )
}

