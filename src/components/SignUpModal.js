import { Container, Form, Button, Modal } from "react-bootstrap";

export default function SignUpModal(props) {
  
  return (
    <>
      

      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div className="login-container d-flex justify-content-center align-items-center">
              <Form className="rounded p-4">
                <Form.Group className="mb-3 modalInput" controlId="formEmail" >
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your@mail.com"
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3 modalInput" controlId="formPassword">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Full Name"
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3 modalInput" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Your Password"
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formCheckbox">
                  <Button variant="dark" id="signUpButton" >
                    Sign Up 
                  </Button>
                  <p className="mt-3">Already have an account ? <l>Sign in here</l></p>
                </Form.Group>
              </Form>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
