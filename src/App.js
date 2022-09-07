import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//site components
import SiteHeader from "./components/Header.js";
import SiteFooter from "./components/Footer.js";
import CartPage from "./components/cartPage.js";
import ProductPage from "./components/ProductPage.js";
import { useState } from "react";
import LoginModal from "./components/loginModal";
import SignUpModal from "./components/SignUpModal";

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
      <header>
        <SiteHeader userIconHandler={popSignUpModal}></SiteHeader>
      </header>
      <main>
        
        <SignUpModal
          show={showSignUpModal}
          close={closeSignUpModal}
          
        ></SignUpModal>
      </main>
      <SiteFooter></SiteFooter>
    </div>
  );
}

export default App;
