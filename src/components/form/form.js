import { Button, Form } from 'react-bootstrap';

function ContactForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' placeholder='name@example.com' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Your message</Form.Label>
        <Form.Control as='textarea' rows={4} />
      </Form.Group>
      <Button>
        Send Message
      </Button>
    </Form>
  );
}

export default ContactForm;