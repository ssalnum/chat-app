const GeneroCheckbox = ({ onCheckBoxChange, generoSelecionado }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${generoSelecionado === "masculino" ? "selected" : ""}`}>
					<span className='label-text'>Masculino</span>
					<input type='checkbox' className='checkbox border-slate-900'
						checked={generoSelecionado === "masculino"}
						onChange={() => onCheckBoxChange("masculino")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${generoSelecionado === "feminino" ? "selected" : ""}`}>
					<span className='label-text'>Feminino</span>
					<input type='checkbox' className='checkbox border-slate-900'
						checked={generoSelecionado === "feminino"}
						onChange={() => onCheckBoxChange("feminino")}
					/>
				</label>
			</div>
		</div>
	);
};

export default GeneroCheckbox;