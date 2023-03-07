import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import Fernie from '../Fernie.png';

function OurApproach() {
    return (
      <Container fluid={true}>
        <Row className="our-approach-row">
          <Col md={6} className='top-padding dark-blue-background'>
            <h2 className="body-copy-bold-cream">Our approach to digital strategy</h2>
            <p className="body-copy-cream">At Wallen-Douglas Digital, we create customized digital strategies that meet your business goals and reach your target audience. </p>
            <p className="body-copy-cream">We begin with an assessment of your current digital presence and continue with data-driven recommendations and close monitoring to ensure success. </p>
            <p className="body-copy-cream">We begin with an assessment of your current digital presence and continue with data-driven recommendations and close monitoring to ensure success. </p>
          </Col>
          <Col md={6} className='top-padding light-blue-background'>
            <h2 className="body-copy-bold-red">Digital strategy services</h2>
            <ul>
            <li className="body-copy-red">Assessment of Current Digital Presence</li>
            <li className="body-copy-red">Target Audience Analysis</li>
            <li className="body-copy-red">Competitive Analysis</li>
            <li className="body-copy-red">Digital Channels and Tactics Recommendations</li>
            <li className="body-copy-red">Optimization Plan</li>
            <li className="body-copy-red">Ongoing Monitoring and Adjustments</li>
            </ul>
          </Col>
        </Row>
        <Row className="our-approach-row">
        <Col md={6} className="quad-band-img-col">
            <img src={Fernie} alt='iPhone with Texas 4000 website image' className='quad-band-img'/>
          </Col>
          <Col md={6} className='top-padding cream-background'>
            <h2 className="body-copy-bold-blue fifty-top-margin">Benefits of using us for your digital strategy</h2>
            <ul>
            <li className="body-copy-regular-blue">Assessment of Current Digital Presence</li>
            <li className="body-copy-regular-blue">Target Audience Analysis</li>
            <li className="body-copy-regular-blue">Competitive Analysis</li>
            <li className="body-copy-regular-blue">Digital Channels and Tactics Recommendations</li>
            </ul>
          </Col>
        </Row>
        
      </Container>
    );
  }

export default OurApproach;