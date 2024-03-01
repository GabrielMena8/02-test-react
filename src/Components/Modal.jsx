import cerrar from '../assets/img/cerrar.svg'

export const Modal = ({setModal, animar, setAnimar}) => {
    const ocultar = () => {
        setAnimar(false)

        setTimeout(() => {
           setModal(false)
        }, 500);
    }
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={cerrar} alt='Cerrar ' onClick={ocultar} />

        </div>

        <form className={`formulario ${animar ? "animar" :'cerrar'}`}>
            <legend>Agrega tus gastos aquí</legend>

            <div className='campo'>
                <label htmlFor='nombre'>Nombre gasto</label>
                <input type='text' 
                id='nombre' 
                className='u-full-width' 
                placeholder='Ej. Transporte' />
            </div>

            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                <input type='number' 
                id='cantidad' 
                className='u-full-width' 
                placeholder='Ej. 300' />
            </div>


        </form>


    </div>
  )
}
