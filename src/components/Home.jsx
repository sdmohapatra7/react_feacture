import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to='/'>SDM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/'>Features</Nav.Link>
            <Nav.Link as={Link} to='/'>Pricing</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">           
            <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
            <Nav.Link as={Link} to='/profile'>shakti</Nav.Link>            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
