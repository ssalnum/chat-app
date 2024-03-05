import { useSocketContext } from "../../context/SocketContext";
import { useConversaContext } from "../../context/ConversaContext";

const Conversa = ({ conversa, lastIndex }) => {
	const { conversaSelecionada, setConversaSelecionada } = useConversaContext();

	const estaSelecionado = conversaSelecionada?._id === conversa._id;
	const { usuariosOnline } = useSocketContext();
	const estaOnline = usuariosOnline.includes(conversa._id)

	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${estaSelecionado ? "bg-sky-500" : ""}`}
				onClick={() => setConversaSelecionada(conversa)}
			>
				<div className={`avatar ${estaOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img
							src={conversa.imagemDePerfil}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversa.nomeCompleto}</p>
					</div>
				</div>
			</div>

			{!lastIndex && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversa;