import { useEffect, useRef } from "react";
import useGetMensagens from "../../hooks/useGetMensagens";
import Mensagem from "./Mensagem";

const Mensagens = () => {
    const { loading, mensagens } = useGetMensagens();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)
    }, [])

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading &&
                mensagens.length > 0 &&
                mensagens.map((mensagem) => (
                    <div key={mensagem._id} ref={lastMessageRef}>
                        <Mensagem mensagem={mensagem} />
                    </div>
                ))}

            {/* {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)} */}
            {!loading && mensagens.length === 0 && (
                <p className='text-center'>Envie uma mensagem para iniciar uma conversa</p>
            )}
        </div>
    );
};
export default Mensagens;