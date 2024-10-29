import { Request, Response } from "express";
import GruposUsuarioServices from "../../services/Grupos/GruposUsuarios.Services";

class GrupoUsuariosController {
    async cadastro_GrupoUsuarios(req:Request, res:Response) {
        const{ nome }= req.body
        const gruposUsuarioServices = new GruposUsuarioServices()
        const resposta = await gruposUsuarioServices.cadastrar_GruposUsuarios({
            nome
        })
        return res.json(resposta)
    }

    async consulta_GrupoUsuarios (req:Request, res:Response){
        const gruposUsuarioServices = new GruposUsuarioServices()
        const resposta = await gruposUsuarioServices.consulta_grupos()
        return res.json(resposta)
    }
}

export default GrupoUsuariosController