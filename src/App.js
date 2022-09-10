import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//site components
import SiteHeader from "./components/Header.js";
import SiteFooter from "./components/Footer.js";
import CartPage from "./components/cartPage.js";
import ProductPage from "./components/ProductPage.js";
import { useState } from "react";
import LoginModal from "./components/loginModal";
import SignUpModal from "./components/SignUpModal";
import HomePage from "./components/homePage.js";

function App() {
  //// Login Modal state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const closeLoginModal = () => setShowLoginModal(false);
  const popLoginModal = () => setShowLoginModal(true);
  ////------------------------------------------------////

  //// SignUp  Modal  state
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const closeSignUpModal = () => setShowSignUpModal(false);
  const popSignUpModal = () => setShowSignUpModal(true);

  ////------------------------------------------------////

  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <SiteHeader userIconHandler={popLoginModal}></SiteHeader>
      </header>
      <main>
        <LoginModal show={showLoginModal} close={closeLoginModal}></LoginModal>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path="cart" element={<CartPage></CartPage>}></Route>
        </Route>

      </Routes>

       
      </main>
      
      
      </BrowserRouter>
      <SiteFooter></SiteFooter>
    </div>
  );
}

export default App;
