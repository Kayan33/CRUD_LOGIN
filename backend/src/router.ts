import { Router } from "express";
import UsuariosController from "./controller/Usuarios/UsuariosControllers";
import GrupoUsuariosController from "./controller/Grupos/GruposUsarioController";

const router = Router()

router.post('/usuarios', new UsuariosController().cadastrar_Usuario);
router.get('/usuarios', new UsuariosController().consulta_usuarios);

router.post('/grupo', new GrupoUsuariosController().cadastro_GrupoUsuarios);
router.get('/grupo', new GrupoUsuariosController().consulta_GrupoUsuarios);

export default router