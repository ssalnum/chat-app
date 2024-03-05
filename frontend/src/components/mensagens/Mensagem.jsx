
const Mensagem = ({ mensagem }) => {
	return (
		<div>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					{/* <img alt='Tailwind CSS chat bubble component' src={profilePic} /> */}
				</div>
			</div>
			<div className={`chat-bubble text-whitepb-2`}>Mensagem</div>
		</div>
	);
};
export default Mensagem;