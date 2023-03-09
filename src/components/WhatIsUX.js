import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import TX4K from '../TX4KPortfolio.png';

function WhatIsUX() {
    return (
      <Container fluid={true} className="what-is-band">
        <Row className="what-is-band-row">
          <Col md={6} className='top-padding dark-blue-background'>
            <h2 className="body-copy-bold-cream">What is user experience design (UX)?</h2>
            <p className="body-copy-cream">UX design (User Experience Design) is a process of designing products and services that are focused on providing a positive and meaningful experience for the end-user, by taking into consideration their needs, behaviors, and emotions throughout the design process.</p>
            <h2 className="body-copy-bold-cream">Why is it important?</h2>
            <p className="body-copy-cream">In today's business landscape, where the digital environment is constantly changing and competition is fierce, UX design is crucial for companies to differentiate themselves and retain customers by delivering engaging and easy-to-use products and services, resulting in increased brand loyalty, customer satisfaction, and ultimately, business success.</p>
          </Col>
          <Col md={6} className="what-is-img-col">
            <img src={TX4K} alt='iPhone on a wooden stump table, example work for TaxJar is on the screen, two hands holding airpods down on each side of the phone' className='what-is-img'/>
          </Col>
        </Row>
      </Container>
    );
  }

export default WhatIsUX;