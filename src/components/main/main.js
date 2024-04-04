import './main.css';
import building from '/home/petala/Documents/projetos/petalaleite.github.io/src/assets/imgs/building-website-2.svg';
import { Image, Container } from 'react-bootstrap';

function Main() {
  return (
    <div>
      <Container>
        <Image className='rounded mx-auto d-block' width='500' src={building} />
      </Container>
    </div >
  );
}

export default Main;