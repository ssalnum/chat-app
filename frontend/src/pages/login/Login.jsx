import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin.js"

function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(usuario, senha);
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-log shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className='text-violet-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Usuario</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Usuário'
                            className='w-full input input-bordered h-10'
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
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
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <Link to='/signup' className='text-sm text-gray-600 hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Não possui uma conta?
                    </Link>
                    <div>
                        <button
                            className='btn btn-block btn-sm mt-2'
                            disabled={loading}
                        >
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login