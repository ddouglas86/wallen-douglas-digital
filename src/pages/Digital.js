import React from "react";
import { Row } from "react-bootstrap";
import CTABar from "../components/CTABar.js";
import DigitalApproach from "../components/OurApproach/DigitalApproach.js";
import DigitalHero from "../components/HeroSections/DigitalHero.js";
import WhatIsDigital from "../components/WhatIsBands/WhatIsDigital.js";
import MiniDBTestimonial from "../components/Testimonials/MiniDBlueTestimonial.js";
import ServiceBand from "../components/ServiceBand.js";
import "../styles.css";


function Digital() {
    return (
        <Row>
            <DigitalHero /> 
            <WhatIsDigital /> 
            <CTABar />
            <DigitalApproach /> 
            <MiniDBTestimonial />
            <ServiceBand />
        </Row>
    );
}

export default Digital;