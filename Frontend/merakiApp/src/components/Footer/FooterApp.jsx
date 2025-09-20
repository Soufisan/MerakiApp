import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footerApp.css';
import { Link } from 'react-router-dom';

export const FooterApp = () => {
  return (
    <>
      <footer className="pt-5">
        <Container>
          <Row>
            <Col className="mt-5">
              <h5 className="text-uppercase fw-bold mb-4">¿A qué esperas?</h5>
              <p>Elige el destino, nosotros hacemos lo demás.</p>
            </Col>

            <Col className="text-center ">
              <img
                className=" img-logo"
                src="/images/logos/logoeditado.png"
                alt=""
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <div>
                <h5 className="fw-bold">¿Necesitas ayuda?</h5>
                <Link
                  className="links"
                  to="https://www.instagram.com/"
                  target="_blank"
                >
                  <div className="d-flex py-2">
                    <img src="/images/footer/instagram.png" alt="" />
                    <p className="m-2">MerakiViajes</p>
                  </div>
                </Link>

                <Link
                  className="links"
                  to="https://web.whatsapp.com/#!"
                  target="_blank"
                >
                  <div className="d-flex py-2">
                    <img src="/images/footer/what.png" alt="" />
                    <p className="m-2">+ 34 666 555 444</p>
                  </div>
                </Link>

                <Link
                  className="links"
                  to="https://mail.google.com/"
                  target="_blank"
                >
                  <div className="d-flex py-2">
                    <img src="/images/footer/gmail.png" alt="" />
                    <p className="m-2">infoMeraki@gmail.com</p>
                  </div>
                </Link>
              </div>
            </Col>

            <div className="text-center">
              <hr />
              <p>© 2025 Copyright: Alumnos de SocraTech</p>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
};
