import prismaClient from "../../prisma"

interface Grupos {
    nome: string
}

class GruposUsuarioServices {
    async cadastrar_GruposUsuarios({ nome }: Grupos) {
        const cadastro_GruposUsuarios = await prismaClient.gruposUsuarios.create({
            data: {
                nome
            }
        })
        return ({ data: 'cadastro feito', cadastro_GruposUsuarios })
    }

    async consulta_grupos (){
        const consulta = await prismaClient.gruposUsuarios.findMany()
        return consulta
    }

}

export default GruposUsuarioServices