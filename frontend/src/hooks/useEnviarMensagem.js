import { useState } from "react"
import { useConversaContext } from "../context/ConversaContext";
import toast from "react-hot-toast";

const useEnviarMensagem = () => {
    const [loading, setLoading] = useState(false);
    const { mensagens, setMensagens, conversaSelecionada } = useConversaContext();

    const enviarMensagem = async (mensagem) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/mensagens/enviar/${conversaSelecionada._id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mensagem })
            })
            
            const data = await res.json();
            if (data.error) throw new Error(data.error);

            setMensagens([...mensagens, data])
        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false);
        }
    }
    return { loading, enviarMensagem }
}

export default useEnviarMensagem