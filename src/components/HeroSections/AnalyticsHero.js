import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import "../styles.css";

function AnalyticsHero() {
  return (
    <Container fluid={true} className="custom-cta dark-blue-background" style={{ marginTop: '130px' }}>
      <Row>
        <Col className='text-center header-text-bold-cream cta-hero-bottom-margin cta-hero-header-margin'>
          <p>Unleash the Power of Data and Make Informed Business Decisions with Our Comprehensive Analytics and Reporting Services</p>
        </Col>
        </Row>
        <Row>
        <Col className='text-center body-copy-cream cta-hero-body-margin cta-hero-bottom-margin'>
          <p>Make informed business decisions with Wallen-Douglas Digital's comprehensive analytics and reporting services.</p>
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

export default AnalyticsHero;