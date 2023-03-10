import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import logo from '../logo.png';
import '../styles.css';


function TOS() {
    return (
        <Row>
            <Container fluid={true} className='cream-background' style={{ height: '100%', marginTop: '130px' }}>
                <Row>
                <Col className='flex-column d-flex justify-content-center col-margin'>
                <img src={logo} alt='Wallen-Douglas Digital logo' className='mx-auto img-fluid' style={{ maxWidth: '100%', height: 'auto', width: '126px' }} />
                <h1 className='text-center py-4 privacy-header'>Wallen-Douglas Digital</h1>
                <h2 className='text-center privacy-subheader'>Terms of Service</h2>
                </Col>
                </Row>
                <Row>
                <Col className='flex-column d-flex justify-content-center col-margin'>
                    <p className='privacy-body'>These terms and conditions ("Terms") govern your use of Wallen-Douglas Digital Consulting's ("Wallen-Douglas Digital") website and services. By accessing or using the website or services, you agree to be bound by these Terms. If you do not agree with these Terms, do not use this website.</p>
                    <p className='privacy-body'>Services: Wallen-Douglas Digital provides digital consulting services to individuals and businesses.</p>
                    <p className='privacy-body'>Privacy: Wallen-Douglas Digital respects your privacy and is committed to protecting your personal information. Our Privacy Policy, which is incorporated by reference, explains how we collect, use, and disclose personal information. By using our website or services, you consent to the practices described in the Privacy Policy.</p>
                    <p className='privacy-body'>California Consumer Privacy Act (CCPA) Compliance: Wallen-Douglas Digital complies with the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). If you are a California resident, you have certain rights under the CCPA and CPRA. Please see our Privacy Policy for more information.</p>
                    <p className='privacy-body'>Payments: Wallen-Douglas Digital uses a third-party payment processor to process payments. Our payment processor is API compliant. We do not store or process any payment information on our servers.</p>
                    <p className='privacy-body'>Children under 14: Our website is not intended for children under 14 years of age. If you are under 14, you may use our website only with the permission and supervision of a parent or guardian.</p>
                    <p className='privacy-body'>ADA Compliance: Wallen-Douglas Digital is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We strive to comply with the Americans with Disabilities Act (ADA) and related laws.</p>
                    <p className='privacy-body'>Disclaimer: The information provided on our website is for general informational purposes only. Wallen-Douglas Digital does not provide legal, financial, or other professional advice. Any reliance on the information on this website is at your own risk.</p>
                    <p className='privacy-body'>Ownership: All content on this website, including text, graphics, logos, icons, images, audio and video clips, digital downloads, data compilations, and software, is the property of Wallen-Douglas Digital or its content suppliers and is protected by United States and international copyright laws. You may not copy, modify, distribute, display, license, or sell any content obtained from this website without the express written consent of Wallen-Douglas Digital. If you wish to use any content from our website for commercial purposes, you must obtain our express written consent and provide us with notification of such use.</p>
                    <p className='privacy-body'>Termination: Wallen-Douglas Digital may terminate or suspend your access to our website and services at any time, without notice, for any reason, or for no reason at all.</p>
                    <p className='privacy-body'>Warranties and Limitations of Liability: The warranties and limitations of liability set forth in the contract between you and Wallen-Douglas Digital shall apply to your use of our website and services.</p>
                    <p className='privacy-body'>Governing Law: These Terms shall be governed by and construed in accordance with the laws of the state of Texas, without giving effect to any principles of conflicts of law.</p>
                </Col>
                </Row>     
            </Container>
        </Row>
    );
}

export default TOS;