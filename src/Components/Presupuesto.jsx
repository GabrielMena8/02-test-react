import React from 'react'

export const Presupuesto = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>

        <h2>Agrega tu presupuesto</h2>
        <form className='formulario'>
            <div className='campo'>
                <label htmlFor='presupuesto'>Presupuesto</label>
                <input type='text' className='nuevo-presupuesto' placeholder='Agrega tu presupuesto' />
            </div>

            <input type='submit' className='button-primary u-full-width' value='Definir presupuesto' />
            
        </form>
     
    </div>
  )
}
