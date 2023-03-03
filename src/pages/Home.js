import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import hero from "../home_hero.jpg";
import "../styles.css";

function Home() {
    return (
        <Container fluid={true} className="home-hero" style={{marginTop: '11vh'}}>
            <Col md={4}>
                <Row className='home-hero-main-text'>
                    <p>Unlocking Business Growth through Digital Innovation</p>
                </Row>
                <Row className='body-copy-bold'>
                    <p>Unlocking Business Growth through Digital Innovation</p>
                </Row>
                <Row>
                <Button className='custom-button mx-auto'>Get In Touch</Button>
                </Row>
            </Col>
            <Col md={4}>
                <Row>
                <img src={hero} alt='Wallen-Douglas Digital logo' className='mx-auto hero-image'/>
                </Row>
            </Col>
            <Col md={4}>
                <Row className='body-copy-bold'>
                    <p>Implement data-driven strategies to improve the user experience and increase engagement, with a focus on customer acquisition and retention.</p>
                    <p>Leverage the latest technologies and trends to develop innovative and effective digital solutions tailored to your unique business needs.</p>
                    <p>Leverage data and analytics to provide valuable insights, identify opportunities, and inform strategic decision-making for high growth companies</p>
                </Row>
            </Col>
            {/* <Row>
        <Col className='text-center band-header'>
          <p>Unleash Potential</p>
        </Col>
        </Row>
        <Row>
        <Col className='text-center'>
          <p>© 2023 Wallen-Douglas Digital</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <p>© 2023 Wallen-Douglas Digital</p>
        </Col>
      </Row> */}
        </Container>
    );
}

export default Home;