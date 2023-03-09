import React from "react";
import { Row } from "react-bootstrap";
import CTABar from "../components/CTABar.js";
import UXApproach from "../components/UXApproach.js";
import UXHero from "../components/HeroSections/UXHero.js";
import WhatIsUX from "../components/WhatIsUX.js";
import "../styles.css";


function UX() {
    return (
        <Row>
            <UXHero /> 
            <WhatIsUX /> 
            <CTABar />
            <UXApproach /> 
        </Row>
    );
}

export default UX;