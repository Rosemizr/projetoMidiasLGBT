const accessModel = require("../src/models/accessModel")

describe("GET model test", ()=>{
    const access = new accessModel({
        "name": "nome",
        "email": "emailUser",
        "password": "senhaPessoa"
    })
    it("Deve chamar o schema e retornar o nome correto de usuárie", () =>{
        expect(access.name).toBe("nome")
    })
    it("Deve chamar o schema e retornar o email correto de usuárie", () =>{
        expect(access.email).toBe("emailUser")
    })
    it("Deve chamar o schema e retornar a senha correta de usuárie", () =>{
        expect(access.password).toBe("senhaPessoa")
    })
})

describe("CREATE route test", () =>{
    const access = new accessModel({
        "name": "nome",
        "email": "emailUser",
        "password": "senhaPessoa"
    })
    it("Deve salvar no banco de dados o novo nome", () =>{
        access.save().then((dados)=>{
            expect(dados.name).toBe("nomenovo")
        })
    })
})

describe("UPDATE route test", () =>{
    it("Deve editar o nome e atualizar no banco de dados", () =>{
        
        const access = new accessModel({
            "name": "nome",
            "email": "emailUser",
            "password": "senhaPessoa"
        })
        access.name = "novo nome"
        access.save().then((dados)=>{
            expect(dados.name).toBe("novo nome")
        })
    })
})

describe("DELETE route test", () =>{
    it("Deve deletar a mídia do banco de dados", () =>{
        
        const access = new accessModel({
            "name": "nome",
            "email": "emailUser",
            "password": "senhaPessoa"
        })
            access.save().then((dados)=>{
            access.delete().then((novosDados) =>{
            expect(dados.name).toBe(null)
            })
        })
    })
})