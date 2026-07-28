import { createContext, useState } from "react";

export const MyShop = createContext();

export const ContextProvider = ({ children }) => {
  const [formToggle, setFormToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(true);
  const [pageToggle, setPageToggle] = useState(true)

  return (
    <MyShop.Provider
      value={{ setFormToggle, formToggle, homeToggle, setHomeToggle, pageToggle, setPageToggle }}
    >
      {" "}
      {children}{" "}
    </MyShop.Provider>
  );
};
