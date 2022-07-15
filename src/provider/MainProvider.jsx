import { createContext, useState } from "react";

export const MainContext = createContext({
    token: "",
    setToken: () => { }
})

const MainProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))

    return (
        <MainContext.Provider value={{ token, setToken }}>
            {children}
        </MainContext.Provider>
    );
}

export default MainProvider;