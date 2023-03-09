import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import SEO2 from '../SEO2.png';

function UXApproach() {
    return (
      <Container fluid={true}>
        <Row className="our-approach-row">
          <Col md={6} className='top-padding light-blue-background'>
            <h2 className="body-copy-bold-red">Our approach to UX design</h2>
            <p className="body-copy-red">At Wallen-Douglas Digital, we specialize in creating user-centered experiences that drive business success.</p>
            <p className="body-copy-red">We begin by understanding your business goals and target audience, and then design user-centered solutions that meet their needs and drive results.</p>
            <p className="body-copy-red">Our iterative process incorporates user feedback and data-driven insights to deliver the best possible user experiences.</p>
       <p className="body-copy-red">We stay up-to-date with best practices to provide a strong online presence. Contact us to enhance your UX design efforts.</p>
          </Col>
          <Col md={6} className='top-padding cream-background'>
            <h2 className="body-copy-bold-blue">User Experience Services</h2>
            <ul>
            <li className="body-copy-regular-blue">User Research and Analysis</li>
            <li className="body-copy-regular-blue">Wire-framing and Prototyping</li>
            <li className="body-copy-regular-blue">Design Testing and Validation</li>
            <li className="body-copy-regular-blue">Design Optimization Planning</li>
            <li className="body-copy-regular-blue">Implementation and Deployment</li>
            <li className="body-copy-regular-blue">Ongoing Monitoring and Adjustments</li>
            </ul>
          </Col>
        </Row>
        <Row className="our-approach-row">
        <Col md={6} className="quad-band-img-col">
            <img src={SEO2} alt='Two hands holding an iPhone showing TaxJar website sales tax by state and a third hand of a second person touching the screen' className='quad-band-img'/>
          </Col>
          <Col md={6} className='top-padding dark-blue-background'>
            <h2 className="body-copy-bold-cream fifty-top-margin">Benefits of using us for your<br/> 
UX needs</h2>
            <ul>
            <li className="body-copy-cream">Expertise and Experience in User-Centered Design</li>
            <li className="body-copy-cream">Customized Solutions for Your Business</li>
            <li className="body-copy-cream">Data-Driven Content Decisions</li>
            <li className="body-copy-cream">Transparent Reporting and Communication</li>
            </ul>
          </Col>
        </Row>      
      </Container>
    );
  }

export default UXApproach;