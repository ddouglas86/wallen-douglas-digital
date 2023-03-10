import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../logo.png';
import '../styles.css';

function Header() {
    return (
        <Navbar sticky='top'>
            <Container fluid={true} className='p-0 navbars'>
                <Navbar.Brand className='padded-navbar'>
                    <a href='/'><img src={logo} alt='Wallen-Douglas Digital logo' className='logo'/></a>
                </Navbar.Brand>
                <Navbar.Brand>
                <a href='/' className='no-link-decoration'><span className='company-name'>Wallen-Douglas<br/> Digital</span></a></Navbar.Brand>
                <Nav className='right-padding'>
                    <Nav.Link href='/services'><span className='custom-nav-link mr-3'>Services</span></Nav.Link>
                    <Nav.Link href='/portfolio'><span className='custom-nav-link mr-3'>Portfolio</span></Nav.Link>
                    <Nav.Link href='/about'><span className='custom-nav-link mr-3'>About Us</span></Nav.Link>
                    <Nav.Link href='/learn'><span className='custom-nav-link'>Learn</span></Nav.Link>
                    <Button className='custom-button'><a href='/contact-us'>Get In Touch</a></Button>
                </Nav>  
            </Container>
        </Navbar>
    );
}


export default Header;