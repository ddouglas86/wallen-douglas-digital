import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SEO2 from '../../images/SEO2.png';


function SEOApproach() {
    return (
      <Container fluid={true}>
        <Row className="our-approach-row">
          <Col md={6} className='top-padding light-blue-background'>
            <h2 className="body-copy-bold-red">Our approach to SEO</h2>
            <p className="body-copy-red">At Wallen-Douglas Digital, we approach SEO with a focus on results.</p>
            <p className="body-copy-red">We begin by understanding your business goals and target audience, and then develop a custom strategy to reach those goals.</p>
            <p className="body-copy-red">Our data-driven approach optimizes your website and content to increase organic traffic, improve search rankings, and drive leads.</p>
            <p className="body-copy-red">We stay up-to-date with best practices to provide a strong online presence. Contact us to enhance your SEO efforts.</p>
          </Col>
          <Col md={6} className='top-padding cream-background'>
            <h2 className="body-copy-bold-blue">SEO Services</h2>
            <ul>
            <li className="body-copy-regular-blue">Keyword Research</li>
            <li className="body-copy-regular-blue">On-page Optimization</li>
            <li className="body-copy-regular-blue">SEO Optimization Planning</li>
            <li className="body-copy-regular-blue">Analytics and Reporting</li>
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
search engine optimization</h2>
            <ul>
            <li className="body-copy-cream">Expertise and Experience in SEO</li>
            <li className="body-copy-cream">Customized Solutions for Your Business</li>
            <li className="body-copy-cream">Data-Driven Content Decisions</li>
            <li className="body-copy-cream">Transparent Reporting and Communication</li>
            </ul>
          </Col>
        </Row>
        
      </Container>
    );
  }

export default SEOApproach;