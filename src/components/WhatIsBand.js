import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import TX4K from '../TX4KPortfolio.png';

function WhatIsBand() {
    return (
      <Container fluid={true} className="what-is-band">
        <Row className="what-is-band-row">
          <Col md={6} className='top-padding'>
            <h2 className="body-copy-bold-red">What is digital strategy</h2>
            <p className="body-copy-red">Digital strategy is a comprehensive plan that outlines a business's goals, target audience, and tactics for maximizing success in the digital space, utilizing a combination of technologies, platforms, and channels to achieve desired outcomes.</p>
            <h2 className="body-copy-bold-red">Why is it important?</h2>
            <p className="body-copy-red">In today's increasingly digital world, a well-crafted digital strategy is essential for businesses to stay competitive, reach their target audience, and achieve their goals through effective utilization of technology and digital channels.</p>
          </Col>
          <Col md={6} className="what-is-img-col">
            <img src={TX4K} alt='iPhone with Texas 4000 website image' className='what-is-img'/>
          </Col>
        </Row>
      </Container>
    );
  }

export default WhatIsBand;