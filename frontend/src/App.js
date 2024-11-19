import React from 'react'
import Rotas from './Routes'
import { ToastContainer } from 'react-toastify'
import Authprovider from './context/authContext'

export default function App() {
  return (
    <Authprovider>
      <div>
        <Rotas />
        <ToastContainer
          autoClose={5000}
        />
      </div>
    </Authprovider>
  )
}


