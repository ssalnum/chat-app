import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const usuarioAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [authUsuario, setAuthUsuario] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)

    return <AuthContext.Provider value={{ authUsuario, setAuthUsuario }}>
        {children}
    </AuthContext.Provider>
}