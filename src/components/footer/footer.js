import React from 'react';
import './footer.css';
import { Container, Nav, Image } from 'react-bootstrap';

function Footer() {
  const D = new Date();
  let year = D.getFullYear();
  return (
    <footer className="text-center footer_">
      <Container>
        <Nav>
          <Nav.Item>
            <Nav.Link target='_blank' href='https://github.com/petalaleite'>
              <Image src='https://img.icons8.com/ios/50/FFFFFF/github--v1.png' />
              GitHub
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link target='_blank' href='https://www.linkedin.com/in/petala-leite/'>
              <img alt="" src='https://img.icons8.com/ios/50/FFFFFF/linkedin-circled--v1.png' />
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