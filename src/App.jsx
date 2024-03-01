import { Header } from "./Components/Header"
import { useState } from "react"  

import { Modal } from "./Components/Modal"
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'
function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValid, setIsValid] = useState(false)

  const [modal, setModal] = useState(false)
  const [animar, setAnimar] = useState(false)


  const handleNuevoGasto = (e) => {
    setModal(true)

    setTimeout(() => {
      setAnimar(true)
    }, 500);

  }

  return (

      <div>
        <Header 
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValid={isValid}
          setIsValid={setIsValid}
        />
        {isValid && (
            <div className="nuevo-gasto">
               <img onClick={handleNuevoGasto} src= {IconoNuevoGasto} alt="Icono nuevo gasto" />
           </div>
    
        )}
        {modal && <Modal 
                  setModal={setModal} 
                  animar={animar}
                  setAnimar={setAnimar}
                  />}
      </div>


  )
}

export default App
