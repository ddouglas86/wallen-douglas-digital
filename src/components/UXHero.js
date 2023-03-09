import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles.css";

function UXHero() {
  return (
    <Container fluid={true} className="custom-cta cream-background" style={{ marginTop: '130px' }}>
      <Row>
        <Col className='text-center header-text-bold-blue cta-hero-bottom-margin cta-hero-header-margin'>
          <p>Revamp Your Digital Presence and Enhance User Engagement with Our Custom User Experience (UX) Design Services</p>
        </Col>
        </Row>
        <Row>
        <Col className='text-center body-copy-regular-blue cta-hero-body-margin cta-hero-bottom-margin'>
          <p>Designing for user needs and delivering exceptional experiences to drive your business forward.</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
        <Button className='custom-button mx-auto cta-hero-bottom-margin'>Get In Touch</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default UXHero;