import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


function ServiceHero() {
  return (
    <Container fluid={true} className='service-band light-blue-background' style={{ marginTop: '130px' }}>
      <Row>
        <Col md={5} className='d-flex justify-content-center align-items-center flex-wrap'>
          <Button href='/digital-strategy' className='grid-button mb-3'>
            <div className='grid-button-content'>
              <h3>Digital<br/>Strategy</h3>
              <p>Maximizing Your Online Potential with a Comprehensive Digital Strategy</p>
            </div>
          </Button>
          <Button href='/search-engine-optimization' className='grid-button mb-3'>
            <div className='grid-button-content'>
              <h3>Search Engine Optimization (SEO)</h3>
              <p>Driving Traffic and Building Brand Credibility</p>
            </div>
          </Button>
          <Button href='/user-experience-design' className='grid-button mb-3'>
            <div className='grid-button-content'>
              <h3>User Experience Design (UX)</h3>
              <p>Putting Your Users First: The Key to Successful UX Design.</p>
            </div>
          </Button>
          <Button href='/analytics-reporting' className='grid-button mb-3'>
            <div className='grid-button-content'>
              <h3>Reporting <br/>& Analytics</h3>
              <p>Unlocking Actionable Insights for Informed Business Decisions through Analytics and Reporting.</p>
            </div>
          </Button>
        </Col>
        <Col md={6}>
          <p className='service-band-header-red service-band-custom-margin'>Boosting Your Digital Success with Tailored SEO, UX, Digital Strategy, and Analytics Services.</p>
          <p className='service-band-body body-copy-bold-red service-band-custom-margin'>Our comprehensive selection of digital services will help you achieve your online goals and reach your target audience effectively, driving measurable results and boosting your overall digital success.</p>
          <Button className='custom-button service-band-custom-margin'><a href='#' className='explore-btn-margin'>Explore Services</a></Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceHero;

