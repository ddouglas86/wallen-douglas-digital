import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles.css";

function ServicesHero() {
  return (
    <Container fluid={true} className="custom-cta" style={{ marginTop: '130px' }}>
      <Row>
        <Col className='text-center header-text-bold-cream services-hero-bottom-margin services-hero-header-margin'>
          <p>Unlock Your Online Success with Our Digital Strategy Services</p>
        </Col>
        </Row>
        <Row>
        <Col className='text-center body-copy-bold services-hero-body-margin services-hero-bottom-margin'>
          <p>Leveraging technology and data to create a customized digital strategy that drives growth and achieves your business goals.</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
        <Button className='custom-button mx-auto services-hero-bottom-margin'>Get In Touch</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ServicesHero;