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
        <Container className='justify-content-end'>
          <Nav>
            <Nav.Item>
              <button className='btn-nav'>
                <Nav.Link className='links' href="/">Home</Nav.Link>
              </button>
            </Nav.Item>
            <Nav.Item>
              <button className='btn-nav'>
                <Nav.Link className='links' href="projects">Projects</Nav.Link>
              </button>
            </Nav.Item>
            <Nav.Item>
              <button className='btn-nav'>
                <Nav.Link className='links' href="contact">Contact</Nav.Link>
              </button>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Navbar>
        <Container>
          <Nav.Item className='profession'>
            Software Engineer
          </Nav.Item>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;