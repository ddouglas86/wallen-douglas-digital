import React from "react";
import { Row } from "react-bootstrap";
import CTABar from "../components/CTABar.js";
import DigitalApproach from "../components/OurApproach/DigitalApproach.js";
import DigitalHero from "../components/HeroSections/DigitalHero.js";
import WhatIsDigital from "../components/WhatIsBands/WhatIsDigital.js";
import "../styles.css";


function Digital() {
    return (
        <Row>
            <DigitalHero /> 
            <WhatIsDigital /> 
            <CTABar />
            <DigitalApproach /> 
        </Row>
    );
}

export default Digital;