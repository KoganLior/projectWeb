import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
export default function SiteHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">WheyUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Potein"
              id="basic-nav-dropdown"
              className="mx-3"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Supplements"
              id="basic-nav-dropdown"
              className="mx-3"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" className="mx-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#link" className="mx-3">
              ForLater use
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span className="icons">
          <FaRegUser size={"1.7em"}></FaRegUser>{" "}
        </span>
        <span className="icons">
          <FaShoppingCart size={"1.7em"}></FaShoppingCart>
        </span>
      </Container>
    </Navbar>
  );
}

