import React, { useContext } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MyShop } from "./context/MyContext";

const App = () => {
  const { formToggle, homeToggle } = useContext(MyShop);

  return (
    <div>
      {/* {formToggle ? <Register/> : <Login/>} */}
      {homeToggle ? <Home /> : <Login />}

      {/* <Navbar/> */}
      {/* <About/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default App;
