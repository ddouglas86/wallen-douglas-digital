import React from 'react';
import { Row } from 'react-bootstrap';
import CTABar from '../components/CTAs/CTABar.js';
import AnalyticsApproach from '../components/OurApproach/AnalyticsApproach.js';
import AnalyticsHero from '../components/HeroSections/AnalyticsHero.js';
import WhatIsAnalytics from '../components/WhatIsBands/WhatIsAnalytics.js';
import MiniLBTestimonial from '../components/Testimonials/MiniLBlueTestimonial.js';
import ServiceBandDark from '../components/ServiceBandDark.js';
import LightCTA from '../components/CTAs/LightCTA.js';
import '../styles.css';


function Analytics() {
    return (
        <Row>
            <AnalyticsHero /> 
            <WhatIsAnalytics /> 
            <CTABar />
            <AnalyticsApproach />
            <MiniLBTestimonial />
            <ServiceBandDark />
            <LightCTA />
        </Row>
    );
}

export default Analytics;