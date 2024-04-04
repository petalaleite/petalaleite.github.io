import React from 'react';
import "./navbar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Nav.Item className='name m-1'>Pétala Leite</Nav.Item>
        </Container>
      </Navbar>
      <Navbar>
        <Container>
          <Nav.Item className='profession'>
            Software Engineer
          </Nav.Item>
        </Container>
      </Navbar>
      <Navbar className='justify-content-end'>
        <Nav >
          <Nav.Item>
            <Nav.Link className='links' href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='links' href="projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='links' href="contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;