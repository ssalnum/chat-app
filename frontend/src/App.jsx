import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Toaster } from 'react-hot-toast';
import { usuarioAuthContext } from './context/authContext'

function App() {
  const { authUsuario } = usuarioAuthContext()
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUsuario ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={authUsuario ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUsuario ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
