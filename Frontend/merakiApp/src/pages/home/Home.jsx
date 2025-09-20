import React from 'react'
import './home.css'
import { Col, Row } from 'react-bootstrap'

export const Home = () => {
  return (
     <section className="section-portada">
        <Row lg={2}>
          <Col className="logo d-flex flex-column align-items-center p-5">
            <img src="/images/logos/logoeditado.png" alt="" />
          </Col>
        </Row>
      </section>
  )
}
