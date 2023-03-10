import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../logo.png';
import '../styles.css';

function Footer() {
    return (
        <Container fluid={true} className='footer-container'>
            <Row className='footer-container-row custom-footer-pad'>
                <Col md={5} className='text-center'>
                    <Row>
                        <img src={logo} alt='Wallen-Douglas Digital logo' className='mx-auto img-fluid' style={{ maxWidth: "100%", height: "auto", width: "126px" }} />
                    </Row>
                    <Row className='company-name custom-footer-margin'>
                        <p>Wallen-Douglas<br />Digital</p>
                    </Row>
                    <Row className='d-flex justify-content-center custom-footer-margin'>
                    <Button className='custom-button'><a href='/contact-us'>Get In Touch</a></Button>
                    </Row>
                    <Row>
                        <h2 className='subheader-bold-blue'>Unleashing Business Potential, One Digital Touchpoint at a Time.</h2>
                        {/* <p>© 2023 Wallen-Douglas Digital</p> */}
                    </Row>
                </Col>
                <Col md={7} className='text-center'>
                    <Row className='custom-row'>
                        <Col md={4}><a href="/services" className='custom-nav-link'>Services</a></Col>
                        <Col md={4}><a href="/digital-strategy" className='custom-nav-link'>Digital Strategy</a></Col>
                        <Col md={4}><a href="/learn" className='custom-nav-link'>Learn</a></Col>
                    </Row>
                    <Row className='custom-row'>
                        <Col md={4}><a href="/about" className='custom-nav-link'>About Us</a></Col>
                        <Col md={4}><a href="/user-experience-design" className='custom-nav-link'>UX Design</a></Col>
                        <Col md={4}><a href="/style" className='custom-nav-link'>Style Guide</a></Col>
                    </Row>
                    <Row className='custom-row'>
                        <Col md={4}><a href="/portfolio" className='custom-nav-link'>Portfolio</a></Col>
                        <Col md={4}><a href="/search-engine-optimization" className='custom-nav-link'>SEO</a></Col>
                        <Col md={4}><a href="/terms" className='custom-nav-link'>Terms of Service</a></Col>
                    </Row>
                    <Row className='custom-row'>
                        <Col md={4}><a href="/security" className='custom-nav-link'>Security</a></Col>
                        <Col md={4}><a href="/analytics-reporting" className='custom-nav-link'>Analytics & Reporting</a></Col>
                        <Col md={4}><a href="/privacy" className='custom-nav-link'>Privacy Policy</a></Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    );
}



export default Footer;
