export const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = new Date().getTime().toString(36)

    return random + fecha
}

export const formatfecha = fecha => {
    const fechanueva= new Date(fecha)
    const options = {year: 'numeric', month: 'long', day: '2-digit'}
    return fechanueva.toLocaleDateString('es-ES', options)
}