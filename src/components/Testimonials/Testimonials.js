import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Heather from "../../images/Testimonials/Heather.png";
import Dan from "../../images/Testimonials/Dan.png";
import Alisa from '../../images/Testimonials/Alisa.png';
import Angela from '../../images/Testimonials/Angela.png';
import Nathan from '../../images/Testimonials/Nathan.png';
import Ellen from '../../images/Testimonials/Ellen.png';


function Testimonials() {
   return (
     <Container fluid={true} className="testimonials-container cream-background">
        <Row className="testimonials-container-header ">
            <Col md={12} className="text-center header-text-regular">
                <p>Testimonials</p>
            </Col>
        </Row>
        <Row className="testimonials-container-row">
            <Col md={4} className="text-center">
                <p className='body-copy-bold-blue'>Alisa Maclin</p>
                <p className='subheader-regular'>CMO, Developer Marketing | IBM</p>
                <img src={Alisa} className="img-thumb"></img>
                <p className="body-copy-regular-blue">“Corie is a true leader in digital marketing. Highly skilled, his approach is focused on business results, and best action to achieve both short and long term goals. Corie is not afraid to ask tough questions, and crawl through data to get to the root cause to ensure that the actions he takes effectively address the issue/opportunity. When we worked together I viewed Corie as a key member not only of our performance marketing team but of our strategy team as well.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-blue'>Daniel Brockley</p>
            <p className='subheader-regular'>Head of Content & Creative | TaxJar / Stripe</p>
            <img src={Dan} className="img-thumb"></img>
                <p className="body-copy-regular-blue">“Corie is a savvy digital marketer who stays current on new tools and approaches, and is constantly testing and iterating on his ideas to make them better. Corie and I worked together on a website redesign where SEO was an important component, and he was a great partner through the process. He helped ensure that our site generated a high volume of qualified leads while also amplifying our brand and delivering a great user experience.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-blue'>Ellen Mamedov</p>
            <p className='subheader-regular'>Global Director of SEO | IBM</p>
            <img src={Ellen} className="img-thumb"></img>
                <p className="body-copy-regular-blue">“Wallen-Douglas Digital has been a great partner for our company. They have helped us to develop a digital strategy that has helped us to grow our business exponentially. We are very happy with the results and look forward to continuing to work with them in the future.”</p>
            </Col>
        </Row>
        <Row className="testimonials-container-row">
            <Col md={4} className="text-center">
            <p className='body-copy-bold-blue'>Nathan Bybee</p>
            <p className='subheader-regular'>Sr. Web Lead | IBM</p>
            <img src={Nathan} className="img-thumb"></img>
                <p className="body-copy-regular-blue">“I worked with Corie on a number of major Web projects for IBM. He was always so knowledgeable about our metrics and search results he became my go-to person whenever I had questions about either. Later his content planning and leadership helped drive the creation of one of IBM's most successful search capture efforts ever. Ever focused on the details and mechanics driving web results, we even collaborated on improving web performance of the overall IBM Cloud web site. Over the course of 4-5 years, Corie was a trusted source of information and a helpful partner in driving digital reach and revenue for IBM.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-blue'>Heather Wilson</p>
            <p className='subheader-regular'>Director of Employee Brand | TaxJar / Stripe</p>
            <img src={Heather} className="img-thumb"></img>
                <p className="body-copy-regular-blue">“I had the absolute pleasure of working with Corie while at TaxJar. Data-driven, creative and strategic, Corie elevated every facet of a major rebrand while leading by example as a professional and a teammate. He is collaborative, effective and, quite frankly, a joy. I'd jump at the chance to call him a teammate again if I could.”</p>
            </Col>
            <Col md={4} className="text-center">
            <p className='body-copy-bold-blue'>Angela Salter</p>
            <p className='subheader-regular'>Sr. Sales Leader | TaxJar / Stripe</p>
            <img src={Angela} className="img-thumb"></img>
                <p className="body-copy-regular-blue">“Corie was a key player in our company's rebrand with a focus on detail and an eye for detail. Corie's knowledgeable, driven, and an enthusiastic colleague that I've appreciated working with. Any organization would be lucky to have Corie on their team!”</p>
            </Col>
        </Row>
    </Container>
   );
}

export default Testimonials;