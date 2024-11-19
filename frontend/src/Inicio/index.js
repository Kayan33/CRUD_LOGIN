import React, { useContext, useState } from 'react'
import { Await, Link } from 'react-router-dom'

import './estilo.inicio.scss'
import { toast } from 'react-toastify'
import { AutenticadoContexto } from '../context/authContext'


export default function Inicio() { 
    const {loginEntrada} = useContext(AutenticadoContexto)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')





    async function dadosLogin(e) {
        e.preventDefault()
        if (!email||!password) {
            toast.warning('Prencha todos os campos')
            return
            
        }

      try {
        await loginEntrada (email, password)
      } catch (err) {
        
      }
    }

   

    return (
        <div className='conteinerInicioGeral'>
            <h1>Pagina de Inicio CRUD Login</h1>

            <form onSubmit={dadosLogin}>
                <input
                    type="text"
                    placeholder='Digite o E-mail'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='Digite a Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='Submit'>Enviar</button>
            </form>
            <p>Para se cadastrar clique <Link to='/DashBoard'>AQUI</Link> </p>
        </div>
    )
}