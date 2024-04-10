import React from 'react';
import { Container, Nav, Image, Navbar } from 'react-bootstrap';
import './footer.css';

function Footer() {
  return (
    <Container>
      <Navbar className='justify-content-center' sticky='bottom'>
        <Nav >
          <Nav.Item>
            <Nav.Link className='links' target='_blank' href='https://github.com/petalaleite'>
              <Image className='images' src='https://img.icons8.com/ios/50/FFFFFF/github--v1.png' />
              GitHub
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='links' target='_blank' href='https://www.linkedin.com/in/petala-leite/'>
              <Image className='images' src='https://img.icons8.com/ios/50/FFFFFF/linkedin-circled--v1.png' />
              Linkedin
            </Nav.Link>
          </Nav.Item>
        </Nav >
      </Navbar>
    </Container >
  );

}

export default Footer;