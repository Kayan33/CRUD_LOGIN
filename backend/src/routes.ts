import { Router } from 'express'

//Importação dos Controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'
import { LoginController } from './Controllers/login/loginController'
import { estaAutenticado } from './mddleware/estaAutenticado'

const router = Router()

//Criação das Rotas de End Point
//Rotas de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.get('/ConsultarUsuarios',estaAutenticado, new UsuariosControllers().consultarUsuarios)
router.post('/ConsultarUsuariosUnico',estaAutenticado, new UsuariosControllers().consultarUsuariosUnico)
router.put('/AlterarDadosUsuarios',estaAutenticado, new UsuariosControllers().alterarDadosUsuarios)
router.delete('/ApagarUsuarios/:id',estaAutenticado, new UsuariosControllers().apagarUsuarios)

router.post('/loginUsuarios', new LoginController().loginUsuarios)
router.get('/verificaToken', new LoginController().loginUsuarios)

//Rotas de Grupos
router.post('/CadastrarGrupos',estaAutenticado, new GruposControllers().cadastrarGrupos)


export default router