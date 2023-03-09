import React from "react";
import { Row } from "react-bootstrap";
import CTABar from "../components/CTABar.js";
import OurApproach from "../components/OurApproach/DigitalApproach.js";
import ServiceBand from "../components/ServiceBand.js";
import ServicesHero from "../components/ServicesHero.js";
import WhatIsBand from "../components/WhatIsBands/WhatIsDigital.js";
import "../styles.css";


function Services() {
    return (
        <Row>
            <ServiceBand />
            {/* <ServicesHero /> 
            <WhatIsBand /> 
            <CTABar />
            <OurApproach />  */}
          
        </Row>
    );
}

export default Services;