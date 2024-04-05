import { Card, CardGroup } from 'react-bootstrap';

function Cards() {
  return (
    <CardGroup>
      <Card bg='info'>
        <Card.Img variant='top' />
        <Card.Body>
          <Card.Title>Mongo DB - REST API</Card.Title>
          <Card.Text>REST API project </Card.Text>
        </Card.Body>
      </Card>
      <Card bg='info'>
        <Card.Img variant='top' />
        <Card.Body>
          <Card.Title>Mongo DB - REST API</Card.Title>
          <Card.Text>REST API project </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Cards;