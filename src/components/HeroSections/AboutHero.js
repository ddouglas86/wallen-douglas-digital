import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


function AboutHero() {
  return (
    <Container fluid={true} className="custom-cta dark-blue-background" style={{ marginTop: '130px' }}>
      <Row>
        <Col className='text-center header-text-bold-cream cta-hero-bottom-margin cta-hero-header-margin'>
          <p>About us</p>
        </Col>
        </Row>
        <Row>
        <Col className='text-center body-copy-bold cta-hero-body-margin cta-hero-bottom-margin'>
          <p>Welcome to Wallen-Douglas Digital, where your online success is our top priority. Whether you're looking to improve your search engine visibility, drive more traffic to your website, or increase conversions, we are here to help. </p>
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

export default AboutHero;