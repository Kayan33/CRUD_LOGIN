import { Request, Response } from 'express'
import prismaClient from '../../Prisma'
import { LoginServices } from '../../Services/login/loginServices'



class LoginController {

    async loginUsuarios(req: Request, res: Response) {
        const {email,password} = req.body
        const loginServices = new LoginServices
        const resposta = await loginServices.loginUsuarios({
            email,
            password
        })
        return res.json(resposta)

    }
}

export { LoginController }