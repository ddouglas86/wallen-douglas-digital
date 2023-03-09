import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dan from "../../images/Testimonials/Dan.png";
import Alisa from '../../images/Testimonials/Alisa.png';
import Ellen from '../../images/Testimonials/Ellen.png';


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
                <p className='body-copy-bold-cream'>Alisa Maclin</p>
                <p className='subheader-cream'>CMO, Developer Marketing | IBM</p>
                <img src={Alisa} className="img-thumb"></img>
                <p className="body-copy-cream">“Corie is a true leader in digital marketing. Highly skilled, his approach is focused on business results, and best action to achieve both short and long term goals. Corie is not afraid to ask tough questions, and crawl through data to get to the root cause to ensure that the actions he takes effectively address the issue/opportunity. When we worked together I viewed Corie as a key member not only of our performance marketing team but of our strategy team as well.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-cream'>Daniel Brockley</p>
            <p className='subheader-cream'>Head of Content & Creative | TaxJar / Stripe</p>
            <img src={Dan} className="img-thumb"></img>
                <p className="body-copy-cream">“Corie is a savvy digital marketer who stays current on new tools and approaches, and is constantly testing and iterating on his ideas to make them better. Corie and I worked together on a website redesign where SEO was an important component, and he was a great partner through the process. He helped ensure that our site generated a high volume of qualified leads while also amplifying our brand and delivering a great user experience.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-cream'>Ellen Mamedov</p>
            <p className='subheader-cream'>Global Director of SEO | IBM</p>
            <img src={Ellen} className="img-thumb"></img>
                <p className="body-copy-cream">“Wallen-Douglas Digital has been a great partner for our company. They have helped us to develop a digital strategy that has helped us to grow our business exponentially. We are very happy with the results and look forward to continuing to work with them in the future.”</p>
            </Col>
        </Row>
    </Container>
   );
}

export default MiniDBTestimonial;