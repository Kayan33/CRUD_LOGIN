import { compare } from 'bcryptjs'
import prismaClient from '../../Prisma'
import { sign } from 'jsonwebtoken'

interface login {
    email: string
    password: string
}



class LoginServices {
    async loginUsuarios({ email, password }: login) {
        const usuario = await prismaClient.cadastarUsuarios.findFirst({
            where: {
                email: email,

            }
        })
        if (!usuario) {
            throw new Error("Usuario ou senha Invalido")

        }
        const senhaCrypt = await compare(password, usuario.senha)
        if (!senhaCrypt) {
            throw new Error("Usuario ou senha Invalido")
        }
        const token = sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        },
            process.env.JWT_SECRETO,
            {
                subject: usuario.id,
                expiresIn: '8h'
            })
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token:token
        }
    }
    
    async verificaToken(id: string) {
        const resposta = await prismaClient.cadastarUsuarios.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
             
            }
        })
        return resposta
    }
}

export { LoginServices }