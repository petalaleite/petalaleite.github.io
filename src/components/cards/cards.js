import { Card, Col, Row } from 'react-bootstrap';
import './cards.css';
const projects = [
  {
    id: 1,
    image: require('../../assets/imgs/jelly-page-is-under-construction.png'),
    title: 'Movies Rental REST API',
    description: 'CRUD RESTful API of a movies rental store with MongoDB, Mongoose, Express and Nodejs',
    link: 'https://github.com/petalaleite/movies-rental-backend-with-mongodb',
  },
  {
    id: 2,
    image: require('../../assets/imgs/jelly-page-is-under-construction.png'),
    title: 'Blog REST API',
    description: 'CRUD RESTful API blog using MySQL and Sequelize',
    link: 'https://github.com/petalaleite/blogs-api-project',
  },
  {
    id: 3,
    image: require('../../assets/imgs/jelly-page-is-under-construction.png'),
    title: 'Project 3',
    description: 'Project stacks description',
    link: 'https://github.com/petalaleite/movies-rental-backend-with-mongodb',
  },
  {
    id: 4,
    image: require('../../assets/imgs/jelly-page-is-under-construction.png'),
    title: 'Project 4',
    description: 'Project stack description',
    link: 'https://github.com/petalaleite/movies-rental-backend-with-mongodb',
  },
];

function Cards() {
  return (
    <div className='dev'>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className='card'>
              <Card.Link href={project.link} target='_blank'>
                <Card.Img variant="top" src={project.image} />
              </Card.Link>
              <Card.Body>
                <Card.Title className='card-title text-center'>{project.title}</Card.Title>
                <Card.Text className='card-text text-center'>
                  {project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div >
  );
}

export default Cards;