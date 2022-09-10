import { Col, Container, Row, Carousel } from "react-bootstrap";

export default function HomePage() {
  return (
    <>
      <Container>
        <div className="homePageCarousel">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="homePageCarousel-Img"
              src="https://i.ytimg.com/vi/Iqj9m2f7SAg/maxresdefault.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="homePageCarousel-Img"
              height="50%"
              width="50%"
              src="https://watchapplist.com/wp-content/uploads/2019/09/apple-watch-exersice.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="homePageCarousel-Img"
              src="https://s3images.coroflot.com/user_files/individual_files/large_286010_z3qng7cegmlh7va8j7r4xcs2x.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </div>

        {/* Mini Products Row */}
        <h1 className="homePageRowTitle">Best Sellers</h1>
        <Row className="p-10">
          <Col sm="3" >
            <div className="p-2">
              <img
                src="https://dummyimage.com/800x500/b6a9d6/151b57"
                alt=""
                width="340"
                className="img-fluid rounded shadow-sm"
              />
              <div class="ms-3 d-inline-block align-middle">
                <h5 className="mt-3">Product Name here</h5>
                <h6 className="mt-1 mx-0">Price: 10.3₪</h6>
              </div>
            </div>
          </Col>
          <Col sm="3">
            <div className="p-2">
              <img
                src="https://dummyimage.com/800x500/b6a9d6/151b57"
                alt=""
                width="340"
                className="img-fluid rounded shadow-sm"
              />
              <div class="ms-3 d-inline-block align-middle">
                <h5 className="mt-3">Product Name here</h5>
                <h6 className="mt-1 mx-0">Price: 10.3₪</h6>
              </div>
            </div>
          </Col>
          <Col sm="3">
            <div className="p-2">
              <img
                src="https://dummyimage.com/800x500/b6a9d6/151b57"
                alt=""
                width="340"
                className="img-fluid rounded shadow-sm"
              />
              <div class="ms-3 d-inline-block align-middle">
                <h5 className="mt-3">Product Name here</h5>
                <h6 className="mt-1 mx-0">Price: 10.3₪</h6>
              </div>
            </div>
          </Col>
          <Col sm="3">
            <div className="p-2">
              <img
                src="https://dummyimage.com/800x500/b6a9d6/151b57"
                alt=""
                width="340"
                className="img-fluid rounded shadow-sm"
              />
              <div class="ms-3 d-inline-block align-middle">
                <h5 className="mt-3">Product Name here</h5>
                <h6 className="mt-1 mx-0">Price: 10.3$</h6>
              </div>
            </div>
          </Col>
        </Row>



        <h1 className="homePageRowTitle">On Sale </h1>


        <Row className="p-10">
          <Col sm="3" >
            <div className="p-2">
              <img
                src="https://dummyimage.com/800x500/b6a9d6/151b57"
                alt=""
                width="340"
                className="img-fluid rounded shadow-sm"
              />
              <div class="ms-3 d-inline-block align-middle">
                <h5 className="mt-3">Product Name here</h5>
                <h6 className="mt-1 mx-0">Price: 10.3₪</h6>
              </div>
            </div>
          </Col>
          <Col sm="3">
            <div className="p-2">
              <img
                src="https://dummyimage.com/800x500/b6a9d6/151b57"
                alt=""
                width="340"
                className="img-fluid rounded shadow-sm"
              />
              <div class="ms-3 d-inline-block align-middle">
                <h5 className="mt-3">Product Name here</h5>
                <h6 className="mt-1 mx-0">Price: 10.3₪</h6>
              </div>
            </div>
          </Col>
          <Col sm="3">
            <div className="p-2">
              <img
                src="https://dummyimage.com/800x500/b6a9d6/151b57"
                alt=""
                width="340"
                className="img-fluid rounded shadow-sm"
              />
              <div class="ms-3 d-inline-block align-middle">
                <h5 className="mt-3">Product Name here</h5>
                <h6 className="mt-1 mx-0">Price: 10.3₪</h6>
              </div>
            </div>
          </Col>
          <Col sm="3">
            <div className="p-2">
              <img
                src="https://dummyimage.com/800x500/b6a9d6/151b57"
                alt=""
                width="340"
                className="img-fluid rounded shadow-sm"
              />
              <div class="ms-3 d-inline-block align-middle">
                <h5 className="mt-3">Product Name here</h5>
                <h6 className="mt-1 mx-0">Price: 10.3$</h6>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  );
}
