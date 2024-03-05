import { useEffect, useState } from "react"
import { useConversaContext } from "../context/conversaContext"
import toast from "react-hot-toast";

const useGetMensagens = () => {
    const [loading, setLoading] = useState();
    const { mensagens, setMensagens, conversaSelecionada } = useConversaContext();

    useEffect(() => {
        const getMensagens = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/mensagens/${conversaSelecionada._id}`);
                const data = await res.json();

                if (data.error) throw new Error(data.error);

                setMensagens(data);
            } catch (err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        }
        if (conversaSelecionada?._id) getMensagens();
    }, [conversaSelecionada?._id], setMensagens)

    return { loading, mensagens }
}

export default useGetMensagens