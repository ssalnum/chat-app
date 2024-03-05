import { useState } from 'react'
import { usuarioAuthContext } from '../context/AuthContext';
import toast from "react-hot-toast";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUsuario } = usuarioAuthContext();

    const logout = async () => {
        setLoading(true)
        try {
            const res = await fetch("api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.removeItem("chat-user")
            setAuthUsuario(null)
        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    };

    return { loading, logout }
}

export default useLogout