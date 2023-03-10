import React from "react";
import { Row } from "react-bootstrap";
import ServiceHero from "../components/HeroSections/ServiceHero.js";
import DarkCTA from "../components/CTAs/DarkCTA.js";
import "../styles.css";


function Services() {
    return (
        <Row>
            <ServiceHero /> 
            <DarkCTA />
        </Row>
    );
}

export default Services;