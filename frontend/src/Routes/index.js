import React, { useContext } from 'react'

import Autenticado from './autenticado.routes'
import NAutenticado from './nAutenticado.routes'
import { AutenticadoContexto } from '../context/authContext'


export default function Rotas() {
    const { autenticado } = useContext(AutenticadoContexto)

    return (
        autenticado === true ? <Autenticado /> : <NAutenticado />
    )
}