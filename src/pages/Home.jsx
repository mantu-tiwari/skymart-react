import React, { useContext } from "react";
import { MyShop } from "../context/MyContext";

const Home = () => {
  const { setHomeToggle } = useContext(MyShop);

  return (
    <div>
      <h1>This is Home</h1>
      <button
        onClick={() => {
          setHomeToggle((prev) => !prev);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Home;
