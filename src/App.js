import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home.js";
// import Services from "./pages/Services.js";
// import Portfolio from "./pages/Portfolio.js";
// import About from "./pages/About.js";
// import Learn from "./pages/Learn.js";
// import Whoops404 from "./pages/Whoops404.js";
import Header from './components/Header.js';
// import Footer from './components/Footer.js';

function App() {
    return (
        <Router>
            <Header />
            {/* <div class="container">
                <Routes>
                    <Route path="/"
                        element={<Home />}
                    />
                    <Route path="services" element={<Services />}
                    />
                    <Route path="portfolio" element={<Portfolio />}
                    />
                    <Route path="about"
                        element={<About />}
                    />
                    <Route path="learn"
                        element={<Learn />}
                    />
                    <Route path="*"
                        element={<Whoops404 />}
                    />
                </Routes>
            </div>
            <Footer /> */}
        </Router>
    );
}

export default App;