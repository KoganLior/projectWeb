import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { getCategories } from "../DAL/Api";

export default function SiteHeader(props) {

 const [categories,setCategories]=useState([])

 async function getAllCategories(){
    const categoriesNames= await getCategories()
    setCategories(categoriesNames)
 }

 useEffect(()=>{getAllCategories()},[])
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">WheyUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#link" className="mx-3">Protein</Nav.Link>
            <NavDropdown
              title="Supplements"
              id="basic-nav-dropdown"
              className="mx-3"
            >
              {categories.map(category=>(<NavDropdown.Item href="#action/3.1">{category.name}</NavDropdown.Item>) )}
             
            </NavDropdown>
            <Nav.Link href="#home" className="mx-3">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
        <span className="icons">
          
          <FaRegUser size={"1.7em"} onClick={props.userIconHandler}></FaRegUser>{" "}
          
        </span>
        <span className="icons">
          <FaShoppingCart size={"1.7em"}></FaShoppingCart>
        </span>
      </Container>
      
    </Navbar>
    
  );
}

