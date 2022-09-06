import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//site components
import SiteHeader from "./components/Header.js";
import SiteFooter from "./components/Footer.js";
import CartPage from "./components/cartPage.js";
import ProductPage from "./components/ProductPage.js";
import { useState } from "react";
import LoginModal from "./components/loginModal";

function App() {
  //// Login Modal state
  const [show, setShow] = useState(false);
  const closeLogin = () => setShow(false);
  const userIconHandler = () => setShow(true);
  ////------------------------------------------------////

  return (
    <div className="App">
      <header>
        <SiteHeader userIconHandler={userIconHandler}></SiteHeader>
      </header>
      <main>
        <LoginModal show={show} closeLogin={closeLogin}></LoginModal>
      </main>
      <SiteFooter></SiteFooter>
    </div>
  );
}

export default App;
