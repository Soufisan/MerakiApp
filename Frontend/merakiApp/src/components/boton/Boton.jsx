import './boton.css'

export const Boton = ({nombre, icono, aspecto}) => {

  return (
    <button className={aspecto}><i className={icono}></i>{nombre}</button>
  )
}