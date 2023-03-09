import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Meeting from '../../images/MetricsMeeting.png';

function WhatIsAnalytics() {
    return (
      <Container fluid={true} className="what-is-band">
        <Row className="what-is-band-row">
          <Col md={6} className='top-padding cream-background'>
            <h2 className="body-copy-bold-blue">What is analytics & reporting?</h2>
            <p className="body-copy-regular-blue">Analytics and reporting refers to the process of collecting, analyzing, and presenting data to help understand and measure the performance of a website or online marketing campaign. It involves tracking key metrics such as website traffic, conversion rates, and search engine rankings, and presenting the data in an easy-to-understand format to help businesses make informed decisions and improve their results.</p>
            <h2 className="body-copy-bold-blue">Why is it important?</h2>
            <p className="body-copy-regular-blue">In today's highly competitive business landscape, having a deep understanding of your online performance through analytics and reporting is crucial for success, as it enables businesses to make data-driven decisions, optimize their marketing strategies, and stay ahead of the competition.</p>
          </Col>
          <Col md={6} className="what-is-img-col">
            <img src={Meeting} alt='iPhone on a wooden stump table, example work for TaxJar is on the screen, two hands holding airpods down on each side of the phone' className='what-is-img'/>
          </Col>
        </Row>
      </Container>
    );
  }

export default WhatIsAnalytics;