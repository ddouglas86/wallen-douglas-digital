import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import logo from "../logo.png";
import "../styles.css";


function Privacy() {
    return (
        
            <Container fluid={true} className="cream-background" style={{ height: '100%', marginTop: '130px' }}>
                <Row>
                <Col className="flex-column d-flex justify-content-center col-margin">
                <img src={logo} alt='Wallen-Douglas Digital logo' className='mx-auto img-fluid' style={{ maxWidth: "100%", height: "auto", width: "126px" }} />
                <h1 className="text-center py-4 privacy-header">Wallen-Douglas Digital</h1>
                <h2 className="text-center privacy-subheader">Privacy Policy</h2>
                </Col>
                </Row>
                <Row>
                <Col className="flex-column d-flex justify-content-center col-margin">
                <p className="privacy-body">Last updated: March 10, 2023</p>
                <p className="privacy-body">Wallen-Douglas Digital ("us", "we", or "our") operates the https://www.wallendouglasdigital.com website (the "Service").</p>
                <p className="privacy-body">This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                </Col>
                </Row>
                <Row>
                <Col className="flex-column d-flex justify-content-center col-margin">
                    <p className='privacy-body'>Wallen-Douglas Digital Consulting ("Wallen-Douglas Digital") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and disclose personal information that we collect from you when you use our website or services. By using our website or services, you consent to the practices described in this Privacy Policy.</p>
                    <p className='privacy-body'>California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA): Wallen-Douglas Digital complies with the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). If you are a California resident, you have certain rights under the CCPA and CPRA. Please see our "Contact Us" page for more information.</p>
                    <p className='privacy-body'>Information We Collect: We collect personal information that you provide to us, such as your name, email address, and phone number when you contact us or sign up for our newsletter. We also collect information automatically when you use our website or services, such as your IP address, browser type, and the pages you visit.</p>
                    <p className='privacy-body'>How We Use Your Information: We use your personal information to respond to your inquiries, provide our services to you, and to send you newsletters and marketing communications that may be of interest to you. We may also use your information for our internal business purposes, such as data analysis and improving our website and services.</p>
                    <p className='privacy-body'>Disclosure of Your Information: We may disclose your personal information to third-party service providers who perform services on our behalf, such as payment processing and website hosting. We may also disclose your information to comply with legal requirements or to protect our rights and property.</p>
                    <p className='privacy-body'>Security: We take reasonable measures to protect the personal information that we collect from you from unauthorized access, disclosure, or destruction.</p>
                    <p className='privacy-body'>Retention: We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law.</p>
                    <p className='privacy-body'>Contact Us: If you have any questions or concerns about this Privacy Policy, please contact us through our "Get in Touch" page.</p>
                    <p className='privacy-body'>Changes to this Privacy Policy: We reserve the right to change this Privacy Policy at any time by posting an updated version on our website. Your continued use of our website or services after any such changes constitutes your acceptance of the revised Privacy Policy.</p>
                </Col>
                </Row>     
            </Container>
        
    );
}

export default Privacy;