// import React from "react";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles.css';

import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../logo.png';
import '../styles.css';


// const Header = () => {
//     return (
//         <header>
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//                 <div class="container-fluid">
//                     <img src="/assets/logo.jpeg" alt="Logo" width="120" height="118"
//                         class="d-inline-block align-text-top" />
//                     <h1>Wallen-Douglas<br />Digital</h1>
//                     <span class="navbar-toggler-icon"></span>
//                     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//                         <div class="navbar-nav">
//                             <a class="nav-link" href="#">About</a>
//                             <a class="nav-link" href="#">Services</a>
//                             <a class="nav-link" href="#">Portfolio</a>
//                             <a class="nav-link" href="#">Learn</a>
//                             <button type="button" class="btn btn-contact">Get In Touch</button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }


function Header() {
    return (
        <Navbar>
            <Container fluid={true} className='p-0'>
                <Navbar.Brand>
                    <img src={logo} alt='Wallen-Douglas Digital logo' className='logo' style={{ marginLeft: '200px' }}/>
                </Navbar.Brand>
                <Navbar.Brand>
                    <span className='company-name'>Wallen-Douglas<br/> Digital</span></Navbar.Brand>
                <Nav className='ml-auto' style={{ marginLeft: 'auto' }}>
                    <Nav.Link href='#services'><span className='custom-nav-link mr-3'>Services</span></Nav.Link>
                    <Nav.Link href='#portfolio'><span className='custom-nav-link mr-3'>Portfolio</span></Nav.Link>
                    <Nav.Link href='#about'><span className='custom-nav-link mr-3'>About Us</span></Nav.Link>
                    <Nav.Link href='#learn'><span className='custom-nav-link'>Learn</span></Nav.Link>
                </Nav>
                <Button className='custom-button'>Get In Touch</Button>
            </Container>
        </Navbar>
    );
}


export default Header;