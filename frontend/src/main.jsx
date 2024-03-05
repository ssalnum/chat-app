import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ConversaContextProvider } from './context/ConversaContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ConversaContextProvider>
          <SocketContextProvider>
            <App />
          </SocketContextProvider>
        </ConversaContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
