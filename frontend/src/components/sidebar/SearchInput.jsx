import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { useConversaContext } from "../../context/ConversaContext";
import useGetConversas from "../../hooks/useGetConversas"

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setConversaSelecionada } = useConversaContext();
	const { conversas } = useGetConversas();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 2)
			return toast.error("O termo buscado deve conter mais de 2 caracteres.")


		const conversa = conversas.find((conversa) => conversa.nomeCompleto.toLowerCase().includes(search.toLocaleLowerCase()))

		if (conversa) {
			setConversaSelecionada(conversa);
			setSearch("");
		} else return toast.error("Nenhum usuário encontrado!");
	}

	return (
		<form
			className='flex items-center gap-2'
			onSubmit={handleSubmit}
		>
			<input
				type='text'
				placeholder='Buscar...'
				className='input input-bordered rounded-full'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;