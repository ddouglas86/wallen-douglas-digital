import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";

function CTA() {
  return (
    <Container fluid={true} className="custom-cta">
      <Row className="custom-container-row">
        <Col className='text-center band-header'>
          <p>Unleash Potential</p>
        </Col>
        </Row>
        <Row className="custom-container-row">
        <Col className='text-center'>
          <p>© 2023 Wallen-Douglas Digital</p>
        </Col>
      </Row>
      <Row className="custom-container-row">
        <Col className='text-center'>
          <p>© 2023 Wallen-Douglas Digital</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CTA;