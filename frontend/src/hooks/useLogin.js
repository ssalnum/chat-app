import { useState } from "react";
import { usuarioAuthContext } from '../context/AuthContext';
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState();
    const { setAuthUsuario } = usuarioAuthContext();

    const login = async (nomeDeUsuario, senha) => {
        const sucesso = handleInputErrors(nomeDeUsuario, senha);
        if (!sucesso) return;

        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nomeDeUsuario, senha })
            })

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUsuario(data);

        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }
    return { loading, login };
}

function handleInputErrors(nomeDeUsuario, senha) {
    if (!nomeDeUsuario || !senha) {
        toast.error("Por favor preencha todos os campos.");
        return false;
    }

    return true;
}

export default useLogin