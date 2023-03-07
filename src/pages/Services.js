import React from "react";
import { Row } from "react-bootstrap";
import CTABar from "../components/CTABar.js";
import OurApproach from "../components/OurApproach.js";
import ServicesHero from "../components/ServicesHero.js";
import WhatIsBand from "../components/WhatIsBand.js";
import "../styles.css";


function Services() {
    return (
        <Row>
            <ServicesHero /> 
            <WhatIsBand /> 
            <CTABar />
            <OurApproach /> 
        </Row>
    );
}

export default Services;