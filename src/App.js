import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Digital from "./pages/Digital.js";
// import Portfolio from "./pages/Portfolio.js";
import About from "./pages/About.js";
// import Learn from "./pages/Learn.js";
// import Whoops404 from "./pages/Whoops404.js";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CTA from "./components/CTA.js";
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
                    <Route path="services" element={<Services />}
                    />
                    <Route path="services/digital-strategy" element={<Digital />}
                    />
                    {/* <Route path="portfolio" element={<Portfolio />}
                    /> */}
                    <Route path="about"
                        element={<About />}
                    />
                    {/* <Route path="learn"
                        element={<Learn />}
                    />
                    <Route path="*"
                        element={<Whoops404 />}
                    /> */}
                </Routes>
            </div>
            <CTA />
            <Footer /> 
        </Router>
    );
}

export default App;