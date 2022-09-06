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
  //// modal
  

  ////

  return (
    <div className="App">
      <header>
        <SiteHeader></SiteHeader>
      </header>
      <main>
        <LoginModal></LoginModal>
      </main>
      <SiteFooter></SiteFooter>
    </div>
  );
}

export default App;
