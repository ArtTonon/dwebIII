import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => (
  <Container>
    <h2>Login</h2>
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">Login</Button>
    </Form>
  </Container>
);

export default Login;
