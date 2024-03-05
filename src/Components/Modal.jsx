import cerrar from '../assets/img/cerrar.svg'
import { Mensaje } from './Mensaje'
import { useState, useEffect } from "react"

export const Modal = ({setModal, animar, setAnimar, guardarGasto, setGastoEditado,gastoEditado}) => {
    const ocultar = () => {
        setAnimar(false)
        setGastoEditado({})

        setTimeout(() => {
           setModal(false)
        }, 500);
    }

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState(0)
    const [fecha, setFecha] = useState('')

    useEffect(() => {
        if (Object.keys(gastoEditado).length > 0) {
            setNombre(gastoEditado.nombre)
            setCantidad(gastoEditado.cantidad)
            setCategoria(gastoEditado.categoria)
            setId(gastoEditado.id)
            setFecha(gastoEditado.fecha)

        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')
            setTimeout(() => {
                setMensaje('')
                
            }, 3000);
            return
        }

        guardarGasto({nombre, cantidad, categoria, id, fecha})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={cerrar} alt='Cerrar ' onClick={ocultar} />

        </div>

        <form
         onSubmit={handleSubmit}
         className={`formulario ${animar ? "animar" :'cerrar'}`}>
            <legend>{gastoEditado.nombre ? "Editar Gasto": "Agregar Gasto"}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            <div className='campo'>
                <label htmlFor='nombre'>Nombre gasto</label>
                <input type='text' 
                id='nombre' 
                className='' 
                placeholder='Ej. Transporte'
                value={nombre}
                onChange={e=>setNombre(e.target.value)} />
            </div>

            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                <input type='number' 
                id='cantidad' 
                className='' 
                placeholder='Ej. 300' 
                value={cantidad}
                onChange={e=>setCantidad(e.target.value)}
                />
            </div>

            <div className='campo '>
                <label htmlFor='categoria'> Categoria</label>
                    <select id='categoria' value={categoria} onChange={e=> setCategoria(e.target.value)}>
                        <option value='' disabled>-- Seleccione --</option>
                        <option value='comida'>Comida</option>
                        <option value='casa'>Casa</option>
                        <option value='ahorro'>ahorro</option>
                        <option value='salud'>Salud</option>
                        <option value='ocio'>ocio</option>
                    </select>


            </div>

            <input type='submit' 
                value={gastoEditado ? 'Guardar cambios':'Agregar gasto'} />


        </form>


    </div>
  )
}
