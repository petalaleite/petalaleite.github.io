import React from 'react';
import './main.css';
import { Container } from 'react-bootstrap';
import Typed from 'typed.js';

function Main() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome to my page', 'don\'t leave without sending me a message!', 'Bye!'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <Container>
        <span ref={el} />
      </Container>
    </div >
  );
}

export default Main;