import React from 'react';
import "./navbar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className="justify-content-left navbar">
      <Nav>
        <Navbar.Brand className='brand m-3'>Pétala Leite - Software Engineer</Navbar.Brand>
        <Container>
          <Nav.Item>
            <Nav.Link className='links' href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='links' href="#projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='links' href="#contact">Contact</Nav.Link>
          </Nav.Item>
        </Container>
      </Nav>
    </Navbar>
  );
}

export default Header;