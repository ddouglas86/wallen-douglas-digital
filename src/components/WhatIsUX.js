import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import SEO1 from '../SEO1.png';

function WhatIsUX() {
    return (
      <Container fluid={true} className="what-is-band">
        <Row className="what-is-band-row">
          <Col md={6} className='top-padding cream-background'>
            <h2 className="body-copy-bold-blue">What is user experience design (UX)?</h2>
            <p className="body-copy-regular-blue">UX design (User Experience Design) is a process of designing products and services that are focused on providing a positive and meaningful experience for the end-user, by taking into consideration their needs, behaviors, and emotions throughout the design process.</p>
            <h2 className="body-copy-bold-blue">Why is it important?</h2>
            <p className="body-copy-regular-blue">In today's business landscape, where the digital environment is constantly changing and competition is fierce, UX design is crucial for companies to differentiate themselves and retain customers by delivering engaging and easy-to-use products and services, resulting in increased brand loyalty, customer satisfaction, and ultimately, business success.</p>
          </Col>
          <Col md={6} className="what-is-img-col">
            <img src={SEO1} alt='iPhone on a wooden stump table, example work for TaxJar is on the screen, two hands holding airpods down on each side of the phone' className='what-is-img'/>
          </Col>
        </Row>
      </Container>
    );
  }

export default WhatIsUX;