import React from 'react';
import { Row } from 'react-bootstrap';
import CTABar from '../components/CTAs/CTABar.js';
import UXApproach from '../components/OurApproach/UXApproach.js';
import UXHero from '../components/HeroSections/UXHero.js';
import WhatIsUX from '../components/WhatIsBands/WhatIsUX.js';
import MiniDBTestimonial from '../components/Testimonials/MiniDBlueTestimonial.js';
import ServiceBand from '../components/ServiceBand.js';
import DarkCTA from '../components/CTAs/DarkCTA.js';
import '../styles.css';


function UX() {
    return (
        <Row>
            <UXHero /> 
            <WhatIsUX /> 
            <CTABar />
            <UXApproach /> 
            <MiniDBTestimonial />
            <ServiceBand />
            <DarkCTA />
        </Row>
    );
}

export default UX;