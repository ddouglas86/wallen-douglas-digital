import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heather from "../Heather.png";
import Aisha from "../Aisha.png";
import Dan from "../Dan.png";

function Testimonials() {
   return (
     <Container fluid={true} className="testimonials-container">
        <Row className="testimonials-container-header ">
            <Col md={12} className="text-center header-text-regular">
                <p>Testimonials</p>
            </Col>
        </Row>
        <Row className="testimonials-container-row">
            <Col md={4} className="text-center">
                <p className='body-copy-bold-blue'>First Last Name</p>
                <p className='subheader-regular'>Title | Company Name</p>
                <img src={Aisha} className="img-thumb"></img>
                <p className="body-copy-regular">“Wallen-Douglas Digital has been a great partner for our company. They have helped us to develop a digital strategy that has helped us to grow our business exponentially. We are very happy with the results and look forward to continuing to work with them in the future.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-blue'>First Last Name</p>
            <p className='subheader-regular'>Title | Company Name</p>
            <img src={Dan} className="img-thumb"></img>
                <p className="body-copy-regular">“Wallen-Douglas Digital has been a great partner for our company. They have helped us to develop a digital strategy that has helped us to grow our business exponentially. We are very happy with the results and look forward to continuing to work with them in the future.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-blue'>First Last Name</p>
            <p className='subheader-regular'>Title | Company Name</p>
            <img src={Heather} className="img-thumb"></img>
                <p className="body-copy-regular">“Wallen-Douglas Digital has been a great partner for our company. They have helped us to develop a digital strategy that has helped us to grow our business exponentially. We are very happy with the results and look forward to continuing to work with them in the future.”</p>
            </Col>
        </Row>
        <Row className="testimonials-container-row">
            <Col md={4} className="text-center">
            <p className='body-copy-bold-blue'>First Last Name</p>
            <p className='subheader-regular'>Title | Company Name</p>
            <img src={Dan} className="img-thumb"></img>
                <p className="body-copy-regular">“Wallen-Douglas Digital has been a great partner for our company. They have helped us to develop a digital strategy that has helped us to grow our business exponentially. We are very happy with the results and look forward to continuing to work with them in the future.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-blue'>First Last Name</p>
            <p className='subheader-regular'>Title | Company Name</p>
            <img src={Heather} className="img-thumb"></img>
                <p className="body-copy-regular">“Wallen-Douglas Digital has been a great partner for our company. They have helped us to develop a digital strategy that has helped us to grow our business exponentially. We are very happy with the results and look forward to continuing to work with them in the future.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-blue'>First Last Name</p>
            <p className='subheader-regular'>Title | Company Name</p>
            <img src={Aisha} className="img-thumb"></img>
                <p className="body-copy-regular">“Wallen-Douglas Digital has been a great partner for our company. They have helped us to develop a digital strategy that has helped us to grow our business exponentially. We are very happy with the results and look forward to continuing to work with them in the future.”</p>
            </Col>
        </Row>
    </Container>
   );
}

export default Testimonials;