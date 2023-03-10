import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Conversion from '../../images/ConversionReview.png';

function AnalyticsApproach() {
    return (
      <Container fluid={true}>
        <Row className='our-approach-row'>
          <Col md={6} className='top-padding dark-blue-background'>
            <h2 className='body-copy-bold-cream'>Our approach to analytics & reporting</h2>
            <p className='body-copy-cream'>Wallen-Douglas Digital uses data and analytics to drive their clients' digital strategies.</p>
            <p className='body-copy-cream'>Gathering and analyzing data to identify trends and provide detailed reporting to measure website performance and return on investment.</p>
            <p className='body-copy-cream'>We stay current with industry developments to deliver results-focused web properties and provide clients with data-driven insights.</p>
          </Col>
          <Col md={6} className='top-padding light-blue-background'>
            <h2 className='body-copy-bold-red'>Analytics & reporting services</h2>
            <ul>
            <li className='body-copy-red'>Website traffic and behavior analysis</li>
            <li className='body-copy-red'>Conversion rate optimization tracking</li>
            <li className='body-copy-red'>Key performance indicator (KPI) monitoring and reporting</li>
            <li className='body-copy-red'>Search engine ranking tracking and reporting</li>
            <li className='body-copy-red'>Ongoing reporting and optimization recommendations.</li>
            </ul>
          </Col>
        </Row>
        <Row className='our-approach-row'>
        <Col md={6} className='quad-band-img-col'>
            <img src={Conversion} alt='iPhone with Texas 4000 website image' className='quad-band-img'/>
          </Col>
          <Col md={6} className='top-padding cream-background'>
            <h2 className='body-copy-bold-blue fifty-top-margin'>Benefits of using us for your analytics & reporting</h2>
            <ul>
            <li className='body-copy-regular-blue'>Accurate data tracking and analysis</li>
            <li className='body-copy-regular-blue'>Improved decision making</li>
            <li className='body-copy-regular-blue'>Optimized website and marketing performance</li>
            <li className='body-copy-regular-blue'>Customized reporting</li>
<li className='body-copy-regular-blue'>Time and resource savings</li>
            </ul>
          </Col>
        </Row>
        
      </Container>
    );
  }

export default AnalyticsApproach;