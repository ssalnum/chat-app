import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useGetConversas = () => {
    const [loading, setLoading] = useState(false);
    const [conversas, setConversas] = useState([]);

    useEffect(() => {
        const getConversas = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/usuarios");
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setConversas(data);
            } catch (err) {
                toast.error(err.message)
            } finally {
                setLoading(false);
            }
        }
        getConversas();
    }, []);

    return { loading, conversas }
}

export default useGetConversas