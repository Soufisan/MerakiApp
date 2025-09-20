import { NavLink } from 'react-router-dom';
import { Container, Row, Col, NavDropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../../public/logos-blancos/3.png';
import './navbar.css';

export const NavBar = () => {
  return (
    <nav className="sticky-top">
      <Container>
        <Row>
          <Col className="d-flex align-items-center">
            <img src={logo} alt="" />
          </Col>
          <Col className="d-flex align-items-center gap-4 justify-content-center">
            <NavLink to="/" className="links">
              Home
            </NavLink>
            <NavLink className="links">Paises</NavLink>
            <NavLink className="links">Destinos</NavLink>
            <NavLink to="/about" className="links">
              About
            </NavLink>
            <NavDropdown
              as={Link}
              to="/about"
              className="links"
              title="¿Quiénes somos?"
            >
              <NavDropdown.Item>
                <Link smooth to="#filosofia">
                  {' '}
                  Nuestra Filosofía
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link smooth to="#filosofia">
                  {' '}
                  Conócenos
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link smooth to="#filosofia">
                  {' '}
                  ¿Por qué elegirnos?
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/preguntas" className="links">
              FQA
            </NavLink>
          </Col>
          <Col className="d-flex align-items-center justify-content-end ">
            <button className="mx-2">Regístrate</button>
            <button>
              <i class="bi bi-box-arrow-in-right"></i>Login
            </button>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};
