import { Col, Row } from "react-bootstrap"
import './destinosDisponibles.css'
import { Boton } from "../boton/Boton";

const destinoDisponible = [
  {
    id: 1,
    nombre_destino: 'Roma',
    nombre_pais: 'Italia',
    imagen: 'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?q=80&w=1740&auto=format&fit=crop',
    descripcion: 'Visitaremos Roma para conocer la historia romana y sus huellas en la sociedad del imperio romano.',
    precio: 1500,
    estado: 1,
    maximo_plazas: 30,
    plazas_ocupadas: 15,
    dias_del_viaje: 12,
    fecha: "14 Octubre 2025"
  },
  {
    id: 2,
    nombre_destino: 'París',
    nombre_pais: 'Francia',
    imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1740&auto=format&fit=crop',
    descripcion: 'La ciudad del amor y la luz, famosa por la Torre Eiffel, el Louvre y su exquisita gastronomía.',
    precio: 1600,
    estado: 1,
    maximo_plazas: 30,
    plazas_ocupadas: 14,
    dias_del_viaje: 20,
    fecha: "30 Octubre 2025"
  },
  {
    id: 3,
    nombre_destino: 'Tokio',
    nombre_pais: 'Japón',
    imagen: 'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Una mezcla única de tradición y modernidad, con templos antiguos, tecnología de punta y cultura pop.',
    precio: 2200,
    estado: 1,
    maximo_plazas: 30,
    plazas_ocupadas: 2,
    dias_del_viaje: 10,
    fecha: "15 Noviembre 2025"
  },
  {
    id: 4,
    nombre_destino: 'Nueva York',
    nombre_pais: 'Estados Unidos',
    imagen: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'La ciudad que nunca duerme, llena de rascacielos, museos, espectáculos y diversidad cultural.',
    precio: 2000,
    estado: 1,
    maximo_plazas: 30,
    plazas_ocupadas: 21,
    dias_del_viaje: 24,
    fecha: "30 Noviembre 2025"
  },
  {
    id: 5,
    nombre_destino: 'El Cairo',
    nombre_pais: 'Egipto',
    imagen: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Un viaje al pasado con las pirámides de Giza, la Esfinge y la cultura milenaria de los faraones.',
    precio: 1700,
    estado: 1,
    maximo_plazas: 30,
    plazas_ocupadas: 29,
    dias_del_viaje: 7,
    fecha: "15 Diciembre 2025"
  },
  {
    id: 6,
    nombre_destino: 'Sídney',
    nombre_pais: 'Australia',
    imagen: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Famosa por su icónica Ópera, playas espectaculares y un estilo de vida relajado frente al mar.',
    precio: 2500,
    estado: 1,
    maximo_plazas: 30,
    plazas_ocupadas: 25,
    dias_del_viaje: 15,
    fecha: "10 Enero 2026"
  },
  {
    id: 7,
    nombre_destino: 'Río de Janeiro',
    nombre_pais: 'Brasil',
    imagen: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'La ciudad del carnaval, el Cristo Redentor y las playas de Copacabana e Ipanema.',
    precio: 1800,
    estado: 1,
    maximo_plazas: 30,
    plazas_ocupadas: 24,
    dias_del_viaje: 14,
    fecha: "30 Enero 2026"
  },
  {
    id: 8,
    nombre_destino: 'Marrakech',
    nombre_pais: 'Marruecos',
    imagen: 'https://images.unsplash.com/photo-1628790893107-9cd9dcb90889?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'La perla roja del desierto, con zocos vibrantes, palacios y la increíble plaza Jemaa el-Fna.',
    precio: 1400,
    estado: 1,
    maximo_plazas: 30,
    plazas_ocupadas: 28,
    dias_del_viaje: 7,
    fecha: "15 Febrero 2026"
  },
  {
    id: 9,
    nombre_destino: 'Bali',
    nombre_pais: 'Indonesia',
    imagen: 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Un paraíso tropical con playas, templos y paisajes naturales únicos en el sudeste asiático.',
    precio: 1900,
    estado: 1,
    maximo_plazas: 30,
    plazas_ocupadas: 1,
    dias_del_viaje: 19,
    fecha: "30 Febrero 2026"
  },
  {
    id: 10,
    nombre_destino: 'Atenas',
    nombre_pais: 'Grecia',
    imagen: 'https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Cuna de la civilización occidental, con la Acrópolis, el Partenón y una historia milenaria.',
    precio: 1600,
    estado: 1,
    maximo_plazas: 30,
    plazas_ocupadas: 5,
    dias_del_viaje: 7,
    fecha: "15 Marzo 2026"
  },
];


export const DestinosDisponibles = () => {

  return (
    <section>
      <Row lg={4} className="g-3">
      {destinoDisponible.map(e => {
        return (
          <Col>
            <article >
              <div className="div-imagen">
                <img src={e.imagen} alt="" />
                <div className="div-info">
                  <h3>{e.nombre_destino} - <span>{e.nombre_pais}</span></h3>
                  <p className="descripcion">{e.descripcion}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center py-2">
                {e.estado === 1 && <p className="m-0 disponible"><i class="bi bi-check-circle"></i> {e.estado === 1 && "Disponible"}</p>}
                {e.estado === 1 && <Boton aspecto="redondo"  nombre="¡Reservar Ya!" icono="bi bi-bookmark"/>}
              </div>
            </article>
          </Col>
        )
        
      })}
      </Row>
      
    </section>
  )
}