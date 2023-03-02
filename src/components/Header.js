import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../logo.png';
import '../styles.css';

function Header() {
    return (
        <Navbar>
            <Container fluid={true} className='p-0 navbars'>
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