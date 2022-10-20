import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='sticky-top '>
        <Container>
            <Navbar.Brand as={Link} to="/">
                <span>Home</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav className='h5'>
                    <Nav.Link as={Link} to="transition" >ALL Transition</Nav.Link>
                    <Nav.Link as={Link} to="deposit">Deposit</Nav.Link>
                    <Nav.Link as={Link} to="blogs">Create User</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;