import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Bootstrap components
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Image,
  Carousel,
  Badge
  
} from "react-bootstrap";
import { FaRegUser,FaShoppingCart,FaInstagram,FaFacebook,FaTwitter } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home" >WheyUp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <NavDropdown title="Potein" id="basic-nav-dropdown" className="mx-3">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Supplements" id="basic-nav-dropdown" className="mx-3">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home" className="mx-3">About Us</Nav.Link>
                <Nav.Link href="#link" className="mx-3">ForLater use</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <span className="icons"><FaRegUser size={"1.7em"}></FaRegUser> </span>
             <span className="icons"><FaShoppingCart size={"1.7em"}></FaShoppingCart></span> 
             

          </Container>
        </Navbar>
      </header>
      <main>
      </main>
      <footer class="py-5 my-5 bg-dark">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Title</h5>
                <p>Here the footer content will be.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"className="footer-link">Link 1</a></li>
                    <li><a href="#!"className="footer-link">Link 2</a></li>
                    <li><a href="#!"className="footer-link">Link 3</a></li>
                    <li><a href="#!"className="footer-link">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className="footer-link">Link 1</a></li>
                    <li><a href="#!"className="footer-link">Link 2</a></li>
                    <li><a href="#!"className="footer-link">Link 3</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">
        <Container>
             <span className="icons"><FaInstagram></FaInstagram></span>
             <span className="icons"><FaFacebook></FaFacebook></span>
             <span className="icons"><FaTwitter></FaTwitter></span>
            </Container>
        © 2022 Copyright:
        <p>Lior Kogan</p>
    </div>
      </footer>
    </div>
  );
}

export default App;
