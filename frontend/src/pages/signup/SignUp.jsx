import { Link } from "react-router-dom"
import GeneroCheckbox from "./GeneroCheckbox"
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

function SignUp() {

  const [inputs, setInputs] = useState({
    nomeCompleto: "",
    nomeDeUsuario: "",
    senha: "",
    confirmarSenha: "",
    genero: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (genero) => {
    setInputs({ ...inputs, genero })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-violet-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Nome Completo</span>
            </label>
            <input type='text' placeholder='Nome completo' className='w-full input input-bordered  h-10'
              value={inputs.nomeCompleto}
              onChange={(e) => setInputs({ ...inputs, nomeCompleto: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text'>Usuário</span>
            </label>
            <input type='text' placeholder='Usuário' className='w-full input input-bordered h-10'
              value={inputs.nomeDeUsuario}
              onChange={(e) => setInputs({ ...inputs, nomeDeUsuario: e.target.value })}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Senha</span>
            </label>
            <input
              type='password'
              placeholder='Senha'
              className='w-full input input-bordered h-10'
              value={inputs.senha}
              onChange={(e) => setInputs({ ...inputs, senha: e.target.value })}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Confirmar Senha</span>
            </label>
            <input
              type='password'
              placeholder='Confirmar senha'
              className='w-full input input-bordered h-10'
              value={inputs.confirmarSenha}
              onChange={(e) => setInputs({ ...inputs, confirmarSenha: e.target.value })}
            />
          </div>

          <GeneroCheckbox onCheckBoxChange={handleCheckBoxChange} generoSelecionado={inputs.genero} />

          <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
            Already have an account?
          </Link>

          <div>
            <button
              className='btn btn-block btn-sm mt-2 border border-slate-700'
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp