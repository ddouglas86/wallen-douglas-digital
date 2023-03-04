import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../styles.css';

function ServiceBand() {
    return (
        <Container fluid={true} className='service-band'>
            <Row>
                <Col md={6}>
                    <p className='band-header'>Unleash Potential</p>
                </Col>
                <Col md={6}>
                    <p className='service-band-header'>Boosting Your Digital Success with Tailored SEO, UX, Digital Strategy, and Analytics Services.</p>
                    <p className='service-band-body'>Our comprehensive selection of digital services will help you achieve your online goals and reach your target audience effectively, driving measurable results and boosting your overall digital success.</p>
                    <Button className='custom-button'>Explore Services</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ServiceBand;