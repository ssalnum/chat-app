import Conversa from "./Conversa";
import useGetConversas from "../../hooks/useGetConversas";

const Conversas = () => {
	const { loading, conversas } = useGetConversas();
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversas.map((conversa, index) => (
				<Conversa
					key={conversa._id}
					conversa={conversa}
					ultimoIndex={index === conversas.length - 1}
				/>
			))}

			{loading ? <span className="loading loading-spinner mx-auto"></span> : null}
		</div>
	);
};
export default Conversas;