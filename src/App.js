import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//site components
import SiteHeader from "./components/Header.js"
import SiteFooter from "./components/Footer.js"
import ProductPage from "./components/ProductPage.js"

function App() {
  return (
    <div className="App">
      <header>
        <SiteHeader></SiteHeader>
      </header>
      <main>
       <ProductPage></ProductPage>
      </main>
      <SiteFooter></SiteFooter>
    </div>
  );
}

export default App;
