import { createContext } from "react";

export const MainContext = createContext()

const MainProvider = ({ children }) => {
    return (
        <MainContext.Provider value={{}}>
            {children}
        </MainContext.Provider>
    );
}

export default MainProvider;