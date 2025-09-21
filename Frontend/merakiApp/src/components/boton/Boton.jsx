import './boton.css'

<<<<<<< HEAD
export const Boton = ({nombre, icono, aspecto, ftn}) => {

  return (
    <button onClick={ftn} className={aspecto}> {icono && <i className={icono}></i>}{nombre}</button>
=======
export const Boton = ({nombre, icono, aspecto, onClick}) => {

  return (
    <button className={aspecto} onClick={onClick}><i className={icono}></i>{nombre}</button>
>>>>>>> origin/main
  )
}