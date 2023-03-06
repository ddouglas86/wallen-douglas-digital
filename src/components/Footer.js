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
                        <Button className='custom-button'>Get In Touch</Button>
                    </Row>
                    <Row>
                        <h2 className='subheader-bold-blue'>Unleashing Business Potential, One Digital Touchpoint at a Time.</h2>
                        {/* <p>© 2023 Wallen-Douglas Digital</p> */}
                    </Row>
                </Col>
                <Col md={7} className='text-center'>
                    <Row className='custom-row'>
                        <Col md={4}><span href="#services" className='custom-nav-link'>Services</span></Col>
                        <Col md={4}><span href="#strategy" className='custom-nav-link'>Digital Strategy</span></Col>
                        <Col md={4}><span href="#learn" className='custom-nav-link'>Learn</span></Col>
                    </Row>
                    <Row className='custom-row'>
                        <Col md={4}><span href="#about" className='custom-nav-link'>About Us</span></Col>
                        <Col md={4}><span href="#ux" className='custom-nav-link'>UX Design</span></Col>
                        <Col md={4}><span href="#style" className='custom-nav-link'>Style Guide</span></Col>
                    </Row>
                    <Row className='custom-row'>
                        <Col md={4}><span href="#portfolio" className='custom-nav-link'>Portfolio</span></Col>
                        <Col md={4}><span href="#seo" className='custom-nav-link'>SEO</span></Col>
                        <Col md={4}><span href="#terms" className='custom-nav-link'>Terms of Service</span></Col>
                    </Row>
                    <Row className='custom-row'>
                        <Col md={4}><span href="#security" className='custom-nav-link'>Security</span></Col>
                        <Col md={4}><span href="#analytics" className='custom-nav-link'>Analytics & Reporting</span></Col>
                        <Col md={4}><span href="#privacy" className='custom-nav-link'>Privacy Policy</span></Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    );
}



export default Footer;
