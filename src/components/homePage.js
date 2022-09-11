import { Col, Container, Row, Carousel } from "react-bootstrap";
import {  getHomeProducts } from "../DAL/Api";
import { useState , useEffect } from "react";
import HomePageProduct from "./homePageProduct";
export default function HomePage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      setProducts(await getHomeProducts())
    }
    getData()
  }, [])
  
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
        <Row>
          {products.slice(0,4).map(product=> <HomePageProduct name={product.name} id={product.id}></HomePageProduct>)}
          
        </Row>



        <h1 className="homePageRowTitle">On Sale </h1>


        <Row>
        {products.slice(4,products.length).map(product=> <HomePageProduct name={product.name} id={product.id} key={product.name} ></HomePageProduct>)}
        </Row>

      </Container>
    </>
  );
}
