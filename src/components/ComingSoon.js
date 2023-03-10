import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


function ComingSoon() {
    return (
        <Container fluid={true} className="custom-cta dark-blue-background" style={{ marginTop: '130px' }}>
            <Row>
                <Col className='text-center header-text-bold-cream cta-hero-bottom-margin cta-hero-header-margin'>
                    <p>🚧 Under Construction 🚧</p>
                </Col>
            </Row>
            <Row>
                <Col className='text-center body-copy-cream cta-hero-body-margin cta-hero-bottom-margin'>
                    <p>We're currently working hard to bring you the best website possible, but in the meantime, we're still open for business!<br />If you need our services or have any questions, please don't hesitate to contact us below.<br />Thank you for your patience and we look forward to serving you soon!</p>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <Button className='custom-button mx-auto cta-hero-bottom-margin'><a href='/contact-us'>Get In Touch</a></Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ComingSoon;
