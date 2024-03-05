import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatfecha } from '../Helpers'
import iconoComida from '../assets/img/icono_comida.svg'
import iconoCasa from '../assets/img/icono_casa.svg'
import iconoSalud from '../assets/img/icono_salud.svg'
import iconoahorro from '../assets/img/icono_ahorro.svg'
import icono_ocio from '../assets/img/icono_ocio.svg'

const categorias = {
    comida: iconoComida,
    casa: iconoCasa,
    salud: iconoSalud,
    ahorro: iconoahorro,
    ocio: icono_ocio
}

export const Gasto = ({gasto, setGastoEditado, eliminarGasto}) => {
    const {id, nombre, cantidad, categoria, fecha} = gasto
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditado(gasto)}
            destructive={true}
            >Edit</SwipeAction>
        </LeadingActions>
    )   

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => eliminarGasto(id)}>Delete</SwipeAction>
        </TrailingActions>
    )

    return (
    <SwipeableList>
        <SwipeableListItem 
            leadingActions = {
               leadingActions()
            }
            trailingActions = {
                trailingActions()
            }

        >
            <div className='gasto sombra'>
                <div className='contenido-gasto'>
                    <img src={categorias[categoria]} alt='icono categoria' />
                    <div className='descripcion-gasto'>
                    <p className='categoria'>
                            {categoria}
                    </p>
                        <p className='nombre-gasto'>
                                {nombre}
                        </p>
                        <p className='fecha-gasto'>
                            {formatfecha(fecha)}
                        </p>
                    </div>
                
                </div>
                <p className='cantidad '>
                                    ${cantidad}
                </p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}
