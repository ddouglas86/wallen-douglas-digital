import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import Prototype from '../MobilePrototype.png';

function UXApproach() {
    return (
      <Container fluid={true}>
        <Row className="our-approach-row">
          <Col md={6} className='top-padding cream-background'>
            <h2 className="body-copy-bold-blue">Our approach to UX design</h2>
            <p className="body-copy-regular-blue">At Wallen-Douglas Digital, we specialize in creating user-centered experiences that drive business success.</p>
            <p className="body-copy-regular-blue">We begin by understanding your business goals and target audience, and then design user-centered solutions that meet their needs and drive results.</p>
            <p className="body-copy-regular-blue">Our iterative process incorporates user feedback and data-driven insights to deliver the best possible user experiences.</p>
       <p className="body-copy-regular-blue">We stay up-to-date with best practices to provide a strong online presence. Contact us to enhance your UX design efforts.</p>
          </Col>
          <Col md={6} className='top-padding dark-blue-background'>
            <h2 className="body-copy-bold-cream">User Experience Services</h2>
            <ul>
            <li className="body-copy-cream">User Research and Analysis</li>
            <li className="body-copy-cream">Wire-framing and Prototyping</li>
            <li className="body-copy-cream">Design Testing and Validation</li>
            <li className="body-copy-cream">Design Optimization Planning</li>
            <li className="body-copy-cream">Implementation and Deployment</li>
            <li className="body-copy-cream">Ongoing Monitoring and Adjustments</li>
            </ul>
          </Col>
        </Row>
        <Row className="our-approach-row">
        <Col md={6} className="quad-band-img-col">
            <img src={Prototype} alt='Two hands holding an iPhone showing TaxJar website sales tax by state and a third hand of a second person touching the screen' className='quad-band-img'/>
          </Col>
          <Col md={6} className='top-padding light-blue-background'>
            <h2 className="body-copy-bold-red fifty-top-margin">Benefits of using us for your<br/> 
UX needs</h2>
            <ul>
            <li className="body-copy-red">Expertise and Experience in User-Centered Design</li>
            <li className="body-copy-red">Customized Solutions for Your Business</li>
            <li className="body-copy-red">Data-Driven Content Decisions</li>
            <li className="body-copy-red">Transparent Reporting and Communication</li>
            </ul>
          </Col>
        </Row>      
      </Container>
    );
  }

export default UXApproach;