import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyShop = createContext();

export const ContextProvider = ({ children }) => {
  // const [formToggle, setFormToggle] = useState(false);
  // const [homeToggle, setHomeToggle] = useState(true);
  // const [pageToggle, setPageToggle] = useState(false);
  // const [cartToggle, setCartToggle] = useState(false);

  const [currentPage, setCurrentPage] = useState('login')
  const [product, setProduct] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  console.log(product);
  console.log(cartProduct);

  const getProductData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProduct(res.data);
    } catch (error) {
      console.log("Error is ", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  //  manipulate quantity logic
  const incQuantity = (id) => {
      setCartProduct((prev) => {
          return prev.map((elem) => {
              return elem.id === id ? {...elem, quantity: elem.quantity+1} : elem
          })
      })
  }
  const decQuantity = (id) => {
      setCartProduct((prev) => {
          return prev.map((elem) => {
              return elem.id === id ? {...elem, quantity: elem.quantity-1} : elem
          })
      })
  }

  return (
    <MyShop.Provider
      value={{
        currentPage,
        setCurrentPage,
        product,
        cartProduct,
        incQuantity,
        decQuantity,
        setCartProduct
      }}
    >
      {children}
    </MyShop.Provider>
  );
};
