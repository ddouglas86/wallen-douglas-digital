import React from 'react';
import { Row } from 'react-bootstrap';
import CTABar from '../components/CTAs/CTABar.js';
import ServiceBand from '../components/ServiceBand.js';
import Testimonials from '../components/Testimonials/Testimonials.js';
import HomeHero from '../components/HeroSections/HomeHero.js';
import DarkCTA from '../components/CTAs/DarkCTA.js';
import '../styles.css';


function Home() {
    return (
        <Row>
            <HomeHero />
            <CTABar />
            <ServiceBand />
            <Testimonials />
            <DarkCTA />
        </Row>
    );
}

export default Home;