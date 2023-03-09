import React from "react";
import { Row } from "react-bootstrap";
import CTABar from "../components/CTABar.js";
import AnalyticsApproach from "../components/OurApproach/AnalyticsApproach.js";
import AnalyticsHero from "../components/HeroSections/AnalyticsHero.js";
import WhatIsAnalytics from "../components/WhatIsBands/WhatIsAnalytics.js";
import "../styles.css";


function Analytics() {
    return (
        <Row>
            <AnalyticsHero /> 
            <WhatIsAnalytics /> 
            <CTABar />
            <AnalyticsApproach /> 
        </Row>
    );
}

export default Analytics;