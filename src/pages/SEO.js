import React from "react";
import { Row } from "react-bootstrap";
import CTABar from "../components/CTABar.js";
import SEOApproach from "../components/SEOApproach.js";
import SEOHero from "../components/SEOHero.js";
import WhatIsSEO from "../components/WhatIsSEO.js";
import "../styles.css";


function SEO() {
    return (
        <Row>
            <SEOHero /> 
            <WhatIsSEO /> 
            <CTABar />
            <SEOApproach /> 
        </Row>
    );
}

export default SEO;