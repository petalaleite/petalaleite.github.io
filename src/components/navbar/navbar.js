import React from 'react';
import "./navbar.css";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

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
      <Navbar>
        <Container>
          <Nav>
            <Nav.Item>
              <Button className='btn-nav'>
                <Nav.Link className='links' href="/">Home</Nav.Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button className='btn-nav'>
                <Nav.Link className='links' href="projects">Projects</Nav.Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button className='btn-nav'>
                <Nav.Link className='links' href="contact">Contact</Nav.Link>
              </Button>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar >
    </>
  );
}

export default Header;