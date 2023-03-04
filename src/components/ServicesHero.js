import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles.css";

function ServicesHero() {
  return (
    <Container fluid={true} className="custom-cta" style={{ marginTop: '11vh'}}>
      <Row>
        <Col className='text-center band-header custom-block-spacing services-hero-header-margin'>
          <p>Unlock Your Online Success with Our Digital Strategy Services</p>
        </Col>
        </Row>
        <Row>
        <Col className='text-center body-copy-bold custom-block-spacing services-hero-body-margin'>
          <p>Leveraging technology and data to create a customized digital strategy that drives growth and achieves your business goals.</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
        <Button className='custom-button mx-auto'>Get In Touch</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ServicesHero;