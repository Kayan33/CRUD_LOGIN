import e, { Request, Response } from "express";
import UsuarioServices from "../../services/Usuarios/UsuariosServices";

class UsuariosController{
    async cadastrar_Usuario(req:Request, res:Response){
        const{nome,email,senha}= req.body
        const usuarioServices =  new UsuarioServices()
        const resposta = await usuarioServices.cadastrar_Usuario({
            nome,
            email,
            senha
        })
        return res.json(resposta)
    }

    async consulta_usuarios (req:Request, res:Response){
        const usuarioServices =  new UsuarioServices()
        const resposta = await usuarioServices.consulta()
        return res.json(resposta)
    }
}

export default UsuariosController