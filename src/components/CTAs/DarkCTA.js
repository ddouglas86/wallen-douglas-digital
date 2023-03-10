import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function DarkCTA() {
  return (
    <Container fluid={true} className="custom-cta dark-blue-background">
      <Row>
        <Col className='text-center header-text-bold-cream custom-block-spacing'>
          <p>Unleash Potential</p>
        </Col>
        </Row>
        <Row>
        <Col className='text-center body-copy-bold-cream custom-block-spacing custom-cta-margin'>
          <p >Unlock the full potential of your business with Wallen-Douglas Digital - get in touch to see how our expertise and tailored solutions can drive your success.</p>
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

export default DarkCTA;