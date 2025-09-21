import React, { useState} from 'react'

import { Col, Container, Row } from 'react-bootstrap';
import { Cards } from './Cards';
import { Buscador } from './Buscador';

export const TiempoGeneral = () => {
  const [dataTotal, setDataTotal]= useState();

  return (
    <Container>
      <Row>
        <Col md={3}>
           <Buscador setDataTotal={setDataTotal}/> 
        </Col>
        <Col md={9}>
         <Cards/>
        </Col>
      </Row>
    </Container>
  )
}
