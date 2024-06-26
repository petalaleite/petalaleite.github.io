import React, { useRef } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_SERVICE_ID,);
    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, { publicKey: process.env.REACT_APP_API_PUBLIC_KEY })
      .then(() => { console.log('SUCCESS'); }, (error) => console.log('FAILED', error.text));
  };
  return (
    <>
      <h1>Get in touch</h1>
      <Form className='form-container rounded mx-auto d-block' ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name='user_name' />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' name='user_email' />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your message</Form.Label>
          <Form.Control as='textarea' rows={4} placeholder='Message...' name='message' />
        </Form.Group>
        <Button className='button' type='submit'>
          <Image src='https://img.icons8.com/material-outlined/24/filled-sent.png' />
          Send Message
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;