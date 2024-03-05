import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-log shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className='text-violet-500'> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Usuario</span>
                        </label>
                        <input type='text' placeholder='Usuário' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Senha</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Senha'
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <Link to='/signup' className='text-sm text-gray-600 hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Não possui uma conta?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login