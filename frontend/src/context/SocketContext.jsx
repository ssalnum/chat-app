import { createContext, useContext, useEffect, useState } from "react";
import { usuarioAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [usuariosOnline, setUsuariosOnline] = useState([]);
    const { authUsuario } = usuarioAuthContext();

    useEffect(() => {
        if (authUsuario) {
            const socket = io("http://localhost:5000", {
                query: {
                    usuarioId: authUsuario._id
                }
            });

            setSocket(socket);

            socket.on("getUsuariosOnline", (usuarios) => {
                setUsuariosOnline(usuarios);
            })

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUsuario])

    return <SocketContext.Provider value={{ socket, usuariosOnline }}>{children}</SocketContext.Provider>;
}