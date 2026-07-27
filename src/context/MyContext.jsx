import { createContext, useState } from "react";

export const MyShop = createContext()
 
export const ContextProvider = ({children}) => {
    const [count, setCount] = useState(0)
    
    return <MyShop.Provider value={count} > {children} </MyShop.Provider>
}