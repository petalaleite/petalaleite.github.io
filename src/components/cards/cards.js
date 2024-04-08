import { Card, Col, Row } from 'react-bootstrap';
import './cards.css';

const projects = [
  {
    id: 1,
    image: require('../../assets/imgs/jelly-page-is-under-construction.png'),
    title: 'Movies Rental REST API 1',
    description: 'BLA BLA BLA',
    link: 'https://github.com/petalaleite/movies-rental-backend-with-mongodb',
  },
  {
    id: 2,
    image: require('../../assets/imgs/jelly-page-is-under-construction.png'),
    title: 'Movies Rental REST API 2',
    description: 'BLA BLA BLA',
    link: 'https://github.com/petalaleite/movies-rental-backend-with-mongodb',
  },
  {
    id: 3,
    image: require('../../assets/imgs/jelly-page-is-under-construction.png'),
    title: 'Movies Rental REST API 3',
    description: 'BLA BLA BLA',
    link: 'https://github.com/petalaleite/movies-rental-backend-with-mongodb',
  },
  {
    id: 4,
    image: require('../../assets/imgs/jelly-page-is-under-construction.png'),
    title: 'Movies Rental REST API 4',
    description: 'BLA BLA BLA',
    link: 'https://github.com/petalaleite/movies-rental-backend-with-mongodb',
  },
];

function Cards() {
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cards;