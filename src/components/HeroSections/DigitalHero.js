import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


function DigitalHero() {
  return (
    <Container fluid={true} className='custom-cta dark-blue-background' style={{ marginTop: '130px' }}>
      <Row>
        <Col className='text-center header-text-bold-cream cta-hero-bottom-margin cta-hero-header-margin'>
          <p>Unlock Your Online Success with Our Digital Strategy Services</p>
        </Col>
        </Row>
        <Row>
        <Col className='text-center body-copy-cream cta-hero-body-margin cta-hero-bottom-margin'>
          <p>Leveraging technology and data to create a customized digital strategy that drives growth and achieves your business goals.</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
        <Button className='custom-button mx-auto cta-hero-bottom-margin'><a href='/contact-us'>Get In Touch</a></Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DigitalHero;