import React from "react";
import { Row } from "react-bootstrap";
import CTABar from "../components/CTABar.js";
import SEOApproach from "../components/OurApproach/SEOApproach.js";
import SEOHero from "../components/HeroSections/SEOHero.js";
import WhatIsSEO from "../components/WhatIsBands/WhatIsSEO.js";
import MiniLBTestimonial from "../components/Testimonials/MiniLBlueTestimonial.js";
import "../styles.css";


function SEO() {
    return (
        <Row>
            <SEOHero /> 
            <WhatIsSEO /> 
            <CTABar />
            <SEOApproach />
            <MiniLBTestimonial />
        </Row>
    );
}

export default SEO;