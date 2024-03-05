import { Header } from "./Components/Header"
import { useState, useEffect} from "react"  
import { generarId } from "./Helpers"
import { formatfecha } from "./Helpers"
import { Modal } from "./Components/Modal"
import { Listado } from "./Components/Listado"
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'
import { Filtros } from "./Components/Filtros"


function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0

  )
  const [isValid, setIsValid] = useState(false)

  const [modal, setModal] = useState(false)
  const [animar, setAnimar] = useState(false)

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [ ]

  )

  const [filtros, setFiltros] = useState('')

  const [gastoEditado, setGastoEditado] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditado).length > 0) {
      setModal(true)
      
  
      setTimeout(() => {
        setAnimar(true)
      }, 500);

    }
  } , [gastoEditado])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }
  , [presupuesto])



  useEffect(() => {
    const presupuestoLocal = localStorage.getItem('presupuesto') ?? 0
    if (presupuestoLocal > 0) {
      setIsValid(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }
  , [gastos])


  useEffect (() => {
    if (filtros) {
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtros)
      setGastos(gastosFiltrados)
    }else {
      const gastosLocal = JSON.parse(localStorage.getItem('gastos')) ?? []
      setGastos(gastosLocal)
    }
  }, [filtros])
  









  const handleNuevoGasto = (e) => {
    setModal(true)
    setGastoEditado({})

    setTimeout(() => {
      setAnimar(true)
    }, 500);

  }

  const guardarGasto = (gasto) => {

    if (gasto.id) {
      const gastosActualizados = gastos.map(item => item.id === gasto.id ? gasto : item)
      setGastos(gastosActualizados)
      setGastoEditado({})
    
    }else {

    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
  }
  setAnimar(false)

    setTimeout(() => {
       setModal(false)
    }, 500);
  }


  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }

  return (
      <div className={modal ? 'fijar' : ""}>
        <Header 
          gastos = {gastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValid={isValid}
          setIsValid={setIsValid}
        />
        {isValid && (
          <> 
            <main>
              <Filtros
                setFiltros={setFiltros}
                filtros={filtros}
              />
              <Listado gastos={gastos}
                setGastoEditado={setGastoEditado} 
                eliminarGasto={eliminarGasto}
                />
            </main>
              <div className="nuevo-gasto">
                <img onClick={handleNuevoGasto} src= {IconoNuevoGasto} alt="Icono nuevo gasto" />
            </div>
           </>
    
        )}
        {modal && <Modal 
                  gastoEditado={gastoEditado}
                  setModal={setModal} 
                  animar={animar}
                  setAnimar={setAnimar}
                  guardarGasto={guardarGasto}
                  setGastoEditado={setGastoEditado}
                  />}
      </div>


  )
}

export default App
