import React from "react";
import { Row } from "react-bootstrap";
import CTABar from "../components/CTABar.js";
import ServiceBand from "../components/ServiceBand.js";
import Testimonials from "../components/Testimonials.js";
import HomeHero from "../components/HomeHero.js";
import "../styles.css";


function Home() {
    return (
        <Row>
            <HomeHero />
            <CTABar />
            <ServiceBand />
            <Testimonials />
        </Row>
    );
}

export default Home;