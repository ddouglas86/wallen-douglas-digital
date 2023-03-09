import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Shanna from "../../images/Testimonials/Shanna.jpeg";
import Will from "../../images/Testimonials/Will.jpeg";
import Greyson from "../../images/Testimonials/Greyson.jpeg";



function MiniDBTestimonial() {
   return (
     <Container fluid={true} className="testimonials-container dark-blue-background">
        <Row className="testimonials-container-header ">
            <Col md={12} className="text-center header-text-cream">
                <p>Testimonials</p>
            </Col>
        </Row>
        <Row className="testimonials-container-row">
            <Col md={4} className="text-center">
                <p className='body-copy-bold-cream'>Shanna Seyer</p>
                <p className='subheader-cream'>Senior Instructional Designer | Stripe</p>
                <img src={Shanna} className="img-thumb"></img>
                <p className="body-copy-cream">“Corie and I worked on different teams; however, Corie is phenomenal to work with both professionally and personally. With Corie's expertise in Martech, he has been able to answer questions and provide solutions to those of us in user operations, ensuring that our customers have a stellar experience throughout their entire journey, not just pre-sale. Any company and team would be lucky to have him!”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-cream'>Greyson Curry</p>
            <p className='subheader-cream'>Sales Development Representative | TaxJar</p>
            <img src={Greyson} className="img-thumb"></img>
                <p className="body-copy-cream">“The most collaborative and successful experiences I've had working on projects involving the sales team and marketing team have been when working with Corie. I was able to partner with Corie at TaxJar for two years where we were able to collaborate on a number of very exciting projects together. The most impressive part of working with Corie is his ability to see things from many perspectives quickly. Sales and Marketing are often coming from quite different viewpoints but I always felt Corie was able to quickly understand my view whenever we worked on a problem together. Even more impressive was his ability to find a satisfactory solution that met the needs of all involved. I believe empathy is one of his great strengths and it makes him very enjoyable to work with. I highly recommend Corie as a team member and a leader.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-cream'>Will Ruppel</p>
            <p className='subheader-cream'>Associate Director, Digital Product | SiriusXM</p>
            <img src={Will} className="img-thumb"></img>
                <p className="body-copy-cream">“I worked with Corie for a few years at IBM, and could always rely on him for his professionalism, attention to detail, and deep subject matter expertise. Going into a meeting with Corie, I always knew I was going to walk away with actionable and insightful information. On top of that, Corie's friendly demeanor and positive attitude made it a real pleasure to work together!”</p>
            </Col>
        </Row>
    </Container>
   );
}

export default MiniDBTestimonial;