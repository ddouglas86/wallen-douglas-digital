import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../logo.png';
import '../styles.css';

function Footer() {
    return (
        <Container fluid={true} className='custom-container'>
            <Row className='custom-container-row'>
                <Col md={5} className='text-center'>
                    <Row>
                        <img src={logo} alt='Wallen-Douglas Digital logo' className='mx-auto img-fluid' style={{ maxWidth: "100%", height: "auto", width: "126px" }} />
                    </Row>
                    <Row className='company-name'>
                        <p>Wallen-Douglas<br />Digital</p>
                    </Row>
                    <Row className='d-flex justify-content-center'>
                        <Button className='custom-button'>Get In Touch</Button>
                    </Row>
                    <Row>
                        <h2>Unleashing Business Potential, One Digital Touchpoint at a Time.</h2>
                        {/* <p>© 2023 Wallen-Douglas Digital</p> */}
                    </Row>
                </Col>
                <Col md={7} className='text-center'>
                    <Row className='custom-row'>
                        <Col md={4}><a href="#services" className='footer-nav-link'>Services</a></Col>
                        <Col md={4}><a href="#strategy" className='footer-nav-link'>Digital Strategy</a></Col>
                        <Col md={4}><a href="#learn" className='footer-nav-link'>Learn</a></Col>
                    </Row>
                    <Row className='custom-row'>
                        <Col md={4}><a href="#about" className='footer-nav-link'>About Us</a></Col>
                        <Col md={4}><a href="#ux" className='footer-nav-link'>UX Design</a></Col>
                        <Col md={4}><a href="#style" className='footer-nav-link'>Style Guide</a></Col>
                    </Row>
                    <Row className='custom-row'>
                        <Col md={4}><a href="#portfolio" className='footer-nav-link'>Portfolio</a></Col>
                        <Col md={4}><a href="#seo" className='footer-nav-link'>SEO</a></Col>
                        <Col md={4}><a href="#terms" className='footer-nav-link'>Terms of Service</a></Col>
                    </Row>
                    <Row className='custom-row'>
                        <Col md={4}><a href="#security" className='footer-nav-link'>Security</a></Col>
                        <Col md={4}><a href="#analytics" className='footer-nav-link'>Analytics & Reporting</a></Col>
                        <Col md={4}><a href="#privacy" className='footer-nav-link'>Privacy Policy</a></Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    );
}



export default Footer;
