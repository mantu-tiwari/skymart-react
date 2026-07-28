import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyShop = createContext();

export const ContextProvider = ({ children }) => {
  const [formToggle, setFormToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(true);
  const [pageToggle, setPageToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false)
  const [product, setProduct] = useState([])
  const [cartProduct, setCartProduct] = useState([])
  console.log(product);
  console.log( cartProduct);

  const getProductData = async () => {
    try {
        const res = await axios.get('https://fakestoreapi.com/products')
        setProduct(res.data)
    } catch (error) {
        console.log('Error is ', error);
    }  
  }
 useEffect(() => {
      getProductData()
 },[])

  return (
    <MyShop.Provider
      value={{
        setFormToggle,
        formToggle,
        homeToggle,
        setHomeToggle,
        pageToggle,
        setPageToggle,
        product,
        setCartToggle,
        cartToggle,
        setCartProduct,
        cartProduct,
      }}
    >
      {children}
    </MyShop.Provider>
  );
};
