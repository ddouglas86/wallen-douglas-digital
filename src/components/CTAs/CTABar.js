import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


function CTABar() {
    return (
        <Container className="cta-bar">
            <Row>
                <Col md={11}>
                    <p>Let's discuss your website and growth objectives to develop a tailored plan for your success - contact us to start the conversation!</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button className='custom-button'><a href='/contact-us'>Book Consultation</a></Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CTABar;