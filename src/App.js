import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//site components
import SiteHeader from "./components/Header.js";
import SiteFooter from "./components/Footer.js";
import CartPage from "./components/cartPage.js"
import ProductPage from "./components/ProductPage.js";
import { Container, Col, Row, Stack } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header>
        <SiteHeader></SiteHeader>
      </header>
      <main>
        <CartPage></CartPage>
      </main>
      <SiteFooter></SiteFooter>
    </div>
  );
}

export default App;
