import { TiMessages } from "react-icons/ti"

import Mensagens from "./Mensagens";
import MensagemInput from "./MensagemInput";

import { useConversaContext } from "../../context/conversaContext"
import { usuarioAuthContext } from "../../context/authContext"
import { useEffect } from "react";

const MensagemContainer = () => {
	const { conversaSelecionada, setConversaSelecionada } = useConversaContext();

	useEffect(() => {
		return () => setConversaSelecionada(null);
	}, [])

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!conversaSelecionada ? (
				<NenhumChatSelecionado />
			) : (
				<>

					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>Para:</span>{" "}
						<span className='text-gray-900 font-bold'>{conversaSelecionada.nomeCompleto}</span>
					</div>
					<Mensagens />
					<MensagemInput />
				</>
			)}
		</div>
	);
};

const NenhumChatSelecionado = () => {
	const { authUsuario } = usuarioAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Bem-vindo 👋 {authUsuario.nomeCompleto} ❄</p>
				<p>Seleciona um chat para iniciar uma conversa</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

export default MensagemContainer;