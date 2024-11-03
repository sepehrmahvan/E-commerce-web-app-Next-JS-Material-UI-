import { createContext, ReactNode, useState } from "react";

const MyContext = createContext<any | null>(null);
const { Provider } = MyContext;

interface MyProviderProps {
    children: ReactNode;
}

interface MycontextProps {
}

const MyProvider = ({children} : MyProviderProps) => {

    
    const contextValue: MycontextProps = {
    }
    return <Provider value={contextValue}>{children}</Provider>;
};


export { MyContext, MyProvider };
