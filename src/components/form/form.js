import { Button, Form, Image } from 'react-bootstrap';
import './form.css';

function ContactForm() {
  return (
    <>
      <h1>Get in touch</h1>
      <Form className='form-container rounded mx-auto d-block'>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your message</Form.Label>
          <Form.Control as='textarea' rows={4} placeholder='Message...' />
        </Form.Group>
        <Button className='button'>
          <Image src='https://img.icons8.com/material-outlined/24/filled-sent.png' />
          Send Message
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;