import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


function SEOHero() {
  return (
    <Container fluid={true} className="custom-cta light-blue-background" style={{ marginTop: '130px' }}>
      <Row>
        <Col className='text-center header-text-bold-red cta-hero-bottom-margin cta-hero-header-margin'>
          <p>Boost Your Online Visibility with Our Expert SEO Services</p>
        </Col>
        </Row>
        <Row>
        <Col className='text-center body-copy-red cta-hero-body-margin cta-hero-bottom-margin'>
          <p>Drive traffic, increase visibility, and achieve your online business goals with Wallen-Douglas Digital's expert SEO services.</p>
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

export default SEOHero;