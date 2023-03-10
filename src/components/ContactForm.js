import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ContactForm() {

    return (
        <Container style={{ height: '1075px', marginTop: '130px' }}>
            <Row style={{ height: '100%' }}>
                <Col className='dark-blue-background text-center flex-column justify-content-center' style={{ paddingTop: '150px' }}>
                    <h2 className='header-text-bold-cream col-margin my-5'>Contact Us</h2>
                    <p className='body-copy-bold-cream col-text-margin'>Whether you're looking to improve your digital strategy, SEO, or user experience, our team is here to help.</p>
                    <p className='body-copy-bold-cream col-text-margin' style={{ marginTop: '40px' }}>We encourage you to get in touch with us to learn more about how we can help your business succeed online.</p>
                </Col>
                <Col className='cream-background text-center d-flex flex-column justify-content-center'>
                    <iframe src='https://docs.google.com/forms/d/e/1FAIpQLSf0MlfZliJPweOskl-8L0mYRyMmXEQL_0DGZnkGm8jZdmWchQ/viewform?embedded=true' width='640' height='1075' frameborder='0' marginheight='0' marginwidth='0'>Loading…</iframe>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactForm;