import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from 'react';
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Digital from "./pages/Digital.js";
import SEO from "./pages/SEO.js";
import UX from "./pages/UX.js";
import Analytics from "./pages/Analytics.js";
import Portfolio from "./pages/Portfolio.js";
import About from "./pages/About.js";
import Learn from "./pages/Learn.js";
import Security from "./pages/Security.js";
import StyleGuide from "./pages/StyleGuide.js";
import TOS from "./pages/TOS.js";
import Privacy from "./pages/Privacy.js";
import Whoops404 from "./pages/Whoops404.js";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ContactUs from "./pages/ContactUs.js";
import "./styles.css";


function App() {
    //     const [headerHeight, setHeaderHeight] = useState(0);

    //   useEffect(() => {
    //     const header = document.querySelector('header');
    //     setHeaderHeight(header.offsetHeight);
    //   }, []);

    return (
        <Router>
            <Header />
            <div >
                <Routes>
                    <Route path="/"
                        element={<Home />}
                    />
                    <Route path="/services" element={<Services />}
                    />
                    <Route path="/digital-strategy" element={<Digital />}
                    />
                    <Route path="search-engine-optimization" element={<SEO />}
                    />
                    <Route path="/user-experience-design" element={<UX />}
                    />
                    <Route path="/analytics-reporting" element={<Analytics />}
                    />
                    <Route path="/contact-us" element={<ContactUs />}
                    />
                    <Route path="/portfolio" element={<Portfolio />}
                    />
                    <Route path="/about"
                        element={<About />}
                    />
                    <Route path="/learn"
                        element={<Learn />}
                    />
                    <Route path="/style-guide"
                        element={<StyleGuide />}
                    />
                    <Route path="/security"
                        element={<Security />}
                    />
                    <Route path="/learn"
                        element={<Learn />}
                    />
                    <Route path="/terms-of-service"
                        element={<TOS />}
                    />
                    <Route path="/privacy-policy"
                        element={<Privacy />}
                    />
                    <Route path="*"
                        element={<Whoops404 />}
                    />
                </Routes>
            </div>
            {/* <CTA /> */}
            <Footer />
        </Router>
    );
}

export default App;