import { createContext, useContext, useState } from "react";

const ConversaContext = createContext();

export const useConversaContext = () => {
    return useContext(ConversaContext);
}

export const ConversaContextProvider = ({ children }) => {
    const [conversaSelecionada, setConversaSelecionada] = useState(null);
    const [mensagens, setMensagens] = useState([]);

    return <ConversaContext.Provider value={{ conversaSelecionada, setConversaSelecionada,  mensagens, setMensagens}}>
        {children}
    </ConversaContext.Provider>
}