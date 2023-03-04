import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles.css';

function ServiceBand() {
  return (
    <Container fluid={true} className='service-band'>
      <Row>
        <Col md={5} className='d-flex justify-content-center align-items-center flex-wrap'>
          <Button className='grid-button mb-3'>
            <div className='grid-button-content'>
              <h3>Button 1 Header</h3>
              <p>Button 1 Body Text</p>
            </div>
          </Button>
          <Button className='grid-button mb-3'>
            <div className='grid-button-content'>
              <h3>Button 2 Header</h3>
              <p>Button 2 Body Text</p>
            </div>
          </Button>
          <Button className='grid-button mb-3'>
            <div className='grid-button-content'>
              <h3>Button 3 Header</h3>
              <p>Button 3 Body Text</p>
            </div>
          </Button>
          <Button className='grid-button mb-3'>
            <div className='grid-button-content'>
              <h3>Button 4 Header</h3>
              <p>Button 4 Body Text</p>
            </div>
          </Button>
        </Col>
        <Col md={6}>
          <p className='service-band-header service-band-custom-margin'>Boosting Your Digital Success with Tailored SEO, UX, Digital Strategy, and Analytics Services.</p>
          <p className='service-band-body service-band-custom-margin'>Our comprehensive selection of digital services will help you achieve your online goals and reach your target audience effectively, driving measurable results and boosting your overall digital success.</p>
          <Button className='custom-button service-band-custom-margin'>Explore Services</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceBand;

