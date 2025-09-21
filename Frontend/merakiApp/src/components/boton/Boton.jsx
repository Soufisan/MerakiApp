import './boton.css'

export const Boton = ({nombre, icono, aspecto, ftn}) => {

  return (
    <button onClick={ftn} className={aspecto}> {icono && <i className={icono}></i>}{nombre}</button>
  )
}