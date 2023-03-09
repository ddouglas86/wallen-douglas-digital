import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Patrick from '../../images/Testimonials/Patrick.jpeg'
import Lynda from '../../images/Testimonials/Lynda.jpeg'
import Tariq from '../../images/Testimonials/Tariq.jpeg'



function MiniLBTestimonial() {
   return (
     <Container fluid={true} className="testimonials-container light-blue-background">
        <Row className="testimonials-container-header ">
            <Col md={12} className="text-center header-text-red">
                <p>Testimonials</p>
            </Col>
        </Row>
        <Row className="testimonials-container-row">
            <Col md={4} className="text-center">
                <p className='body-copy-bold-red'>Patrick Stox</p>
                <p className='subheader-red'>Technical SEO, & Brand Ambassador | Ahrefs</p>
                <img src={Patrick} className="img-thumb"></img>
                <p className="body-copy-red">“I loved working with Corie! He's great at data analysis which translates well to all kinds of digital marketing skills. He picks things up quickly and runs with them. He laid out a strategy and showed how a lot of different teams could work together towards a common goal and the results were brilliant.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-red'>Lynda Reinarz</p>
            <p className='subheader-red'>Senior Campaign Manager | IBM</p>
            <img src={Lynda} className="img-thumb"></img>
                <p className="body-copy-red">“I worked with Corie very closely for about two years in the Cloud business at IBM. He is THE go-to person for anything related to digital, search, YouTube and more. He probably regrets having a seat RIGHT next to mine in an open floor plan where I could pepper him with questions all day. Nevertheless, he was always ready and willing to help even if it was outside of his normal scope. He was/is a resource for me in many ways. He is smart, helpful, easy to work with, fun to be around and an expert in his field. I have no doubt that wherever Corie chooses to take his career, he will be successful; and any organization that has the lucky circumstance to find Corie on their team will feel the same.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-red'>Tariq Ahmad</p>
            <p className='subheader-red'>Social Business Manager | IBM</p>
            <img src={Tariq} className="img-thumb"></img>
                <p className="body-copy-red">“Had the great pleasure of working with Corie in 2020. Corie's knowledge of SEO, Digital Marketing/Strategy, Information Architecture, and Cloud Computing is among the best I've ever seen. He is proactive, extremely knowledgeable, organized, a good team player, and always willing to help the business unit and company wherever and whenever needed. Also impressed with Corie's demeanor and ability to stay calm and collected, no matter how busy things got in the workplace. Highly recommend Corie and anyone would be very fortunate to work with him.”</p>
            </Col>
        </Row>
    </Container>
   );
}

export default MiniLBTestimonial;