import React, { useContext } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MyShop } from "./context/MyContext";
import Shop from "./pages/Shop";

const App = () => {
  const { formToggle, homeToggle, pageToggle } = useContext(MyShop);

  return (
    <div>
      <Navbar/>
      {/* {formToggle ? <Register/> : <Login/>} */}
      {/* {homeToggle ? <Home /> : <Login />} */}
      {pageToggle ? <Home/> : <Shop/>}

      {/* <Navbar/> */}
      {/* <About/> */}
      <Footer/>
    </div>
  );
};

export default App;
