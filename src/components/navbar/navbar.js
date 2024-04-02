import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="primary" className="justify-content-center">
      <Nav>
        <Nav.Item>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Header;