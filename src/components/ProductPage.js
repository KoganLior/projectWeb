import {
  Button,
  Container,
  Row,
  Col,
  Carousel,
  Dropdown,
} from "react-bootstrap";

export default function ProductPage() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col sm={8}>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dummyimage.com/800x500/86b5b8/ba8a54"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dummyimage.com/800x500/b6a9d6/151b57"
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dummyimage.com/800x500/f299ab/ed4e4e"
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={4} className="text-center">
          <h3>Item Name</h3>
          <p>some info about the item</p>
          <Dropdown>
            Size:
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Select Size
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            <Button variant="success" className="mx-3">
              <i class="bi bi-cart"></i>Add to cart{" "}
            </Button>{" "}
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
}
