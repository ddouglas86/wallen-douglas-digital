import React from 'react';
import { Row } from 'react-bootstrap';
import CTABar from '../components/CTAs/CTABar.js';
import SEOApproach from '../components/OurApproach/SEOApproach.js';
import SEOHero from '../components/HeroSections/SEOHero.js';
import WhatIsSEO from '../components/WhatIsBands/WhatIsSEO.js';
import MiniLBTestimonial from '../components/Testimonials/MiniLBlueTestimonial.js';
import ServiceBandDark from '../components/ServiceBandDark.js';
import LightCTA from '../components/CTAs/LightCTA.js';
import '../styles.css';


function SEO() {
    return (
        <Row>
            <SEOHero /> 
            <WhatIsSEO /> 
            <CTABar />
            <SEOApproach />
            <MiniLBTestimonial />
            <ServiceBandDark />
            <LightCTA />
        </Row>
    );
}

export default SEO;