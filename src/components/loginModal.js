import { Container, Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
export default function LoginModal(props) {
  
  return (
    <>
      

      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div className="login-container d-flex justify-content-center align-items-center">
              <Form className="rounded p-4">
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formCheckbox">
                  <Form.Check type="checkbox" label="Remember Me"></Form.Check>
                  <Button variant="dark" id="loginButton" className="mb-3">
                    Login
                  </Button>
                  <p className="mt-3">Don't have an account ? <l>Sign up here</l></p>
                </Form.Group>
              </Form>
            </div>
          </Container>
        </Modal.Body>
       
      </Modal>
    </>
  );
}
