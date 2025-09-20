import React from 'react';
import './about.css';
import { Col, Container, Row } from 'react-bootstrap';

export const About = () => {
  return (
    <>
      <section className="section-portada">
        <div className="logo">
          <img src="/images/logos/LogoPrincipalBlanco.png" alt="" />
          <button>Conócenos</button>
        </div>
      </section>
      <section className="presentacion">
        <Container>
          <Row lg={2}>
            <Col lg={6} className="texto mt-5 d-flex flex-column align-items-center justify-content-center">
             <h2 className='mb-3'>Conoce nuestra historia</h2>
              {' '}
              Viajar es más que visitar un lugar; es vivir una historia, crear
              recuerdos y conectar con el mundo. Nuestra misión es ser tu
              compañero en esa aventura. Aquí, te ayudamos a convertir tus ideas
              de viaje en realidades memorables. Nuestro objetivo es inspirarte
              a explorar nuevos horizontes, facilitarte la organización de cada
              detalle y asegurarnos de que cada viaje sea una experiencia
              personal, auténtica e inolvidable.
            </Col>

            <Col lg={6}>
              <Row lg={2} className="d-flex g-0">
                <Col>
                  <img
                    className="img-avion"
                    src="/images/about/paisaje1.jpg"
                    alt=""
                  />
                  <img
                    className="img-avion"
                    src="/images/about/paisaje2.jpg"
                    alt=""
                  />
                </Col>
                <Col>
                  <img
                    className="img-avion"
                    src="/images/about/paisaje3.jpg"
                    alt=""
                  />
                  <img
                    className="img-avion"
                    src="/images/about/paisaje4.jpg"
                    alt=""
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
