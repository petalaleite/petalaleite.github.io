import React from 'react';
import './footer.css';
import { Container, Nav } from 'react-bootstrap';

function Footer() {
  const D = new Date();
  let year = D.getFullYear();
  return (
    <footer className="text-center footer_">
      <Container>
        <Nav>
          <Nav.Item>
            <Nav.Link target='_blank' href='https://github.com/petalaleite'>
              <img alt="" src="./assets/imgs/icons8-github.gif" />
              GitHub
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link target='_blank' href='https://www.linkedin.com/in/petala-leite/'>
              <img alt="" src="" />
              Linkedin
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      Pétala Leite @{year}
    </footer >
  );

}

export default Footer;