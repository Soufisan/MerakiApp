import React from 'react'
import './home.css'
import { Container, Col, Row } from 'react-bootstrap'
import portada from '../../../public/images/portada/portada.jpg'
import { Boton } from '../../components/boton/Boton'
import { DestinosDisponibles } from '../../components/destinoDisponibles/DestinosDisponibles'

export const Home = () => {
  return (
    <>
     <section className="section-portada">
        <Row lg={2}>
          <Col className="logo d-flex flex-column align-items-center p-5">
            <img src="/images/logos/logoeditado.png" alt="" />
          </Col>
        </Row>
      </section>
    <Container>
      <Row lg={2} className='py-4'>
        <Col className='justify-content-center d-flex flex-column'>
          <h1>¿Dónde quieres aterizar en tu próximo viaje?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus sapiente quas minima, perferendis rerum animi modi, placeat, explicabo atque commodi ipsam! Velit eaque ea praesentium doloribus, quos animi minus cum magni unde similique ipsa quidem quas saepe, iure rerum? Quae, iure molestias eligendi expedita consequuntur veniam natus, nisi ipsam saepe error enim omnis eius ab ipsum odio? Ullam quaerat sequi fuga tempore earum mollitia accusamus incidunt ipsam labore. Omnis eligendi rerum amet quo natus ab iusto doloremque quis fugiat nobis officia maiores distinctio veniam modi a rem inventore dolor provident blanditiis similique, minima corrupti quaerat? Porro tempore distinctio sed ratione.</p>
          <Boton aspecto="normal"  nombre="VER DESTINOS" icono="bi bi-book"/>
        </Col>

        <Col>
        <img className='img-home' src={portada} alt="" />
        </Col>
      </Row>
      <h2 className='py-3'>¡Próximos destinos para reservar!</h2>
      <DestinosDisponibles/>

    </Container>
    </>
  )
}
