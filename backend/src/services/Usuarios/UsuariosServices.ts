import prismaClient from "../../prisma"


interface Usuarios {
    nome: string
    email: string
    senha: string
}

class UsuarioServices {

    async cadastrar_Usuario({ nome, email, senha }: Usuarios) {
        const cadastar_usuario = await prismaClient.usuarios.create({
            data: { nome, email, senha }
        })
        return ({ data: 'cadastro feito', cadastar_usuario })
    }

    async  consulta  (){
        const consulta = await prismaClient.usuarios.findMany({
            select:{
                nome:true,
                email:true,
                grupos:{ }
            }
        })
        return consulta
    }

}
export default UsuarioServices