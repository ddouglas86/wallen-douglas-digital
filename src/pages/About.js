import React from "react";
import { Row } from "react-bootstrap";
import CTABar from "../components/CTABar.js";
import AboutHero from "../components/AboutHero.js";
import Testimonials from "../components/Testimonials.js";
import ServiceBand from "../components/ServiceBand.js";
import "../styles.css";


function About() {
    return (
        <Row>
            <AboutHero />
            <CTABar />
            <Testimonials />
            <ServiceBand />
        </Row>
    );
}

export default About;