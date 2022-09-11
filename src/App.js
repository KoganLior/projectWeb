import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//site components
import SiteHeader from "./components/Header.js";
import SiteFooter from "./components/Footer.js";
import CartPage from "./components/cartPage.js";
import { useEffect, useState } from "react";
import LoginModal from "./components/loginModal";
import HomePage from "./components/homePage.js";
import { getProductByID } from "./DAL/Api";
import SignUpModal from "./components/SignUpModal";


function App() {

  //// Login Modal state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const closeLoginModal = () => setShowLoginModal(false);
  const popLoginModal = () => {
    setShowSignUpModal(false)
    setShowLoginModal(true)};
  ////------------------------------------------------////

  //// SignUp  Modal  state
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const closeSignUpModal = () => setShowSignUpModal(false);
  const popSignUpModal = () => {
    setShowLoginModal(false)
    setShowSignUpModal(true)}
  ////------------------------------------------------////

  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <SiteHeader userIconHandler={popLoginModal}></SiteHeader>
      </header>
      <main>
        
      <Routes>
        
        <Route path="/" element={<HomePage/>}>
          <Route path="cart" element={<CartPage></CartPage>}></Route>
          
        </Route>

      </Routes>
      <LoginModal show={showLoginModal} close={closeLoginModal} switchPanel={popSignUpModal}></LoginModal>
      <SignUpModal show={showSignUpModal} close={closeSignUpModal} switchPanel={popLoginModal}></SignUpModal>
      </main>
      
      
      </BrowserRouter>
      <SiteFooter></SiteFooter>
    </div>
  );
}

export default App;
