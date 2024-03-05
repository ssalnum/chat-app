import { useState } from 'react';
import toast from "react-hot-toast";
import { usuarioAuthContext } from '../context/authContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUsuario } = usuarioAuthContext();

    const signup = async ({ nomeCompleto, nomeDeUsuario, senha, confirmarSenha, genero }) => {
        const success = handleInputErrors({ nomeCompleto, nomeDeUsuario, senha, confirmarSenha, genero });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nomeCompleto, nomeDeUsuario, senha, confirmarSenha, genero }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUsuario(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};
export default useSignup;

function handleInputErrors({ nomeCompleto, nomeDeUsuario, senha, confirmarSenha, genero }) {
    if (!nomeCompleto || !nomeDeUsuario || !senha || !confirmarSenha || !genero) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (senha !== confirmarSenha) {
        toast.error("Passwords do not match");
        return false;
    }

    if (senha.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}