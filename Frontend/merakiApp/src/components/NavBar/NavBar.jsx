import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../../public/logos-blancos/3.png'
import './navbar.css';
import { Boton } from "../boton/Boton";


export const NavBar = () => {

  return (
    <nav className="sticky-top"> 
      <Container>
        <Row>
          <Col className="d-flex align-items-center ">
            <img src={logo} alt="" />
          </Col>
          <Col className="d-flex align-items-center gap-4 justify-content-center">
            <NavLink className="links">Paises</NavLink>
            <NavLink className="links">Destinos</NavLink>
            <NavLink className="links">About</NavLink>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <Boton aspecto="normal" nombre="Acceder" icono="bi bi-box-arrow-in-right"/>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}