import { createContext, useState } from "react";

export const MyShop = createContext();

export const ContextProvider = ({ children }) => {
  const [formToggle, setFormToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);

  return (
    <MyShop.Provider
      value={{ setFormToggle, formToggle, homeToggle, setHomeToggle }}
    >
      {" "}
      {children}{" "}
    </MyShop.Provider>
  );
};
