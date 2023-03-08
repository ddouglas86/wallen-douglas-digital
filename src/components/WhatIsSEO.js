import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import SEO1 from '../SEO1.png';

function WhatIsSEO() {
    return (
      <Container fluid={true} className="what-is-band">
        <Row className="what-is-band-row">
          <Col md={6} className='top-padding cream-background'>
            <h2 className="body-copy-bold-blue">What is digital strategy</h2>
            <p className="body-copy-regular-blue">Digital strategy is a comprehensive plan that outlines a business's goals, target audience, and tactics for maximizing success in the digital space, utilizing a combination of technologies, platforms, and channels to achieve desiblue outcomes.</p>
            <h2 className="body-copy-bold-blue">Why is it important?</h2>
            <p className="body-copy-regular-blue">In today's increasingly digital world, a well-crafted digital strategy is essential for businesses to stay competitive, reach their target audience, and achieve their goals through effective utilization of technology and digital channels.</p>
          </Col>
          <Col md={6} className="what-is-img-col">
            <img src={SEO1} alt='iPhone on a wooden stump table, example work for TaxJar is on the screen, two hands holding airpods down on each side of the phone' className='what-is-img'/>
          </Col>
        </Row>
      </Container>
    );
  }

export default WhatIsSEO;