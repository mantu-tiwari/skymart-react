import React, { useContext } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MyShop } from "./context/MyContext";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const App = () => {
  const { currentPage } = useContext(MyShop);

  return (
    <div>
      <Navbar />
      {currentPage === "home" && <Home />}
      {currentPage === "shop" && <Shop />}
      {currentPage === "cart" && <Cart />}
      {currentPage === "about" && <About />}
      {currentPage === "login" && <Login />}
      {currentPage === "register" && <Register />}
      <Footer />
    </div>
  );
};

export default App;
