import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useEnviarMensagem from "../../hooks/useEnviarMensagem";

const MensagemInput = () => {
	const [mensagem, setMensagem] = useState("");
	const { loading, enviarMensagem } = useEnviarMensagem();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await enviarMensagem(mensagem);
		setMensagem("");
	}

	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Envie uma mensagem'
					value={mensagem}
					onChange={(e) => setMensagem(e.target.value)}
				/>
				<button type='submit' className='absolute bottom-6 end-4 flex items-center pe-3'>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
				</button>
			</div>
		</form>
	);
};
export default MensagemInput;