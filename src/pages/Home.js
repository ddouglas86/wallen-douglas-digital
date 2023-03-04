import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CTABar from "../components/CTABar.js";
import ServiceBand from "../components/ServiceBand.js";
import Testimonials from "../components/Testimonials.js";
import hero from "../home_hero.jpg";
import "../styles.css";

function Home() {
    return (
        <Row>
            <Container fluid={true} className="home-hero" style={{ marginTop: '11vh' }}>
                <Col md={4} className='custom-col-pad-left'>
                    <Row className='home-hero-main-text'>
                        <p>Unlocking Business Growth through Digital Innovation</p>
                    </Row>
                    <Row className='body-copy-bold'>
                        <p>Experience exponential business growth through our innovative and customized digital services, tailored to your unique needs.</p>
                    </Row>
                    <Row>
                        <Button className='custom-button mx-auto'>Get In Touch</Button>
                    </Row>
                </Col>
                <Col md={4} className='custom-col-pad-center'>
                    <Row>
                        <img src={hero} alt='Wallen-Douglas Digital logo' className='hero-image' />
                    </Row>
                </Col>
                <Col md={4} className='custom-margin'>
                    <Row className='body-copy-bold'>
                        <p>Implement data-driven strategies to improve the user experience and increase engagement, with a focus on customer acquisition and retention.</p>
                        <p>Leverage the latest technologies and trends to develop innovative and effective digital solutions tailored to your unique business needs.</p>
                        <p>Leverage data and analytics to provide valuable insights, identify opportunities, and inform strategic decision-making for high growth companies</p>
                    </Row>
                </Col>
            </Container>
            <CTABar />
            <ServiceBand />
            <Testimonials />
        </Row>
    );
}

export default Home;