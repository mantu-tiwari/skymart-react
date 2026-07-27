import { createContext, useState } from "react";

export const MyShop = createContext()
 
export const ContextProvider = ({children}) => {
    const [formToggle, setFormToggle] = useState(true)
    
    return <MyShop.Provider value={{setFormToggle, formToggle}} > {children} </MyShop.Provider>
}