import { useConversaContext } from "../../context/ConversaContext";
import { usuarioAuthContext } from "../../context/AuthContext";
import { formataTempo } from "../../utils/formataTempo.js"

const Mensagem = ({ mensagem }) => {
	const { authUsuario } = usuarioAuthContext();
	const { conversaSelecionada } = useConversaContext();
	const ehEmissor = mensagem.emissorId === authUsuario._id;

	const tempoFormatado = formataTempo(mensagem.createdAt);
	const chatClassName = ehEmissor ? "chat-end" : "chat-start";
	const imagemDePerfil = ehEmissor ? authUsuario.imagemDePerfil : conversaSelecionada?.imagemDePerfil;
	const bubbleBgCor = ehEmissor ? "bg-blue-500" : "";

	const shakeClass = mensagem.shake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={imagemDePerfil} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgCor} ${shakeClass} pb-2`}>{mensagem.mensagem}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{tempoFormatado}</div>
		</div>
	);
};
export default Mensagem;