import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";

function WhatIsBand() {
    return (
        <Container fluid={true} className="custom-cta" style={{ marginTop: '11vh'}}>
        <Row>
            <Col className='text-center band-header custom-block-spacing'>
            <p>What is Band?</p>
            </Col>
            </Row>
            <Row>
            <Col className='text-center body-copy-bold custom-block-spacing'>
            <p>Band is a digital strategy agency that helps businesses unlock their online success. We leverage technology and data to create a customized digital strategy that drives growth and achieves your business goals.</p>
            </Col>
        </Row>
        </Container>
    );
    }

export default WhatIsBand;