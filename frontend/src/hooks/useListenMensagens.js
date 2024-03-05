import { useEffect } from 'react';

import { useSocketContext } from '../context/SocketContext'
import { useConversaContext } from '../context/ConversaContext'

const useListenMensagens = () => {
    const { socket } = useSocketContext();
    const { mensagens, setMensagens } = useConversaContext();

    useEffect(() => {
        socket?.on("novaMensagem", (novaMensagem) => {
            novaMensagem.shake = true;
            setMensagens([...mensagens, novaMensagem]);
        });

        return () => socket?.off("novaMensagem")
    }, [socket, setMensagens, mensagens])
}

export default useListenMensagens