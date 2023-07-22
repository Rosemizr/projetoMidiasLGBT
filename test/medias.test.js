const mediaModel = require("../src/models/mediaModel")

describe("GET model test", ()=>{
    const media = new mediaModel({
        "name": "Nome",
        "director": "pessoa",
        "releaseDate": 2005,
        "genre": "ação",
        "available": true,
        "description": "descrição",
        "rating": 5,
        "type": "Game"
    })
    it("Deve chamar o schema e retornar o nome correto da mídia", () =>{
        expect(media.name).toBe("Nome")
    })
    it("Deve chamar o schema e retornar o nome correto do diretor", () =>{
        expect(media.director).toBe("pessoa")
    })
    it("Deve chamar o schema e retornar a data correta", () =>{
        expect(media.releaseDate).toBe(2005)
    })
    it("Deve chamar o schema e retornar o genero correto da mídia", () =>{
        expect(media.genre).toBe("ação")
    })
    it("Deve chamar o schema e retornar o nome correto da mídia", () =>{
        expect(media.available).toBe(true)
    })
    it("Deve chamar o schema e retornar a descrição correta da mídia", () =>{
        expect(media.description).toBe("descrição")
    })
    it("Deve chamar o schema e retornar a avaliação correta da mídia", () =>{
        expect(media.rating).toBe(5)
    })
    it("Deve chamar o schema e retornar o tipo correto da mídia", () =>{
        expect(media.type).toBe("Game")
    })
})

describe("CREATE route test", () =>{
    const media = new mediaModel({
        "name": "Nome",
        "director": "pessoa",
        "releaseDate": 2005,
        "genre": "ação",
        "available": true,
        "description": "descrição",
        "rating": 5,
        "type": "Game"
    })
    it("Deve salvar no banco de dados a nova mídia", () =>{
        media.save().then((dados)=>{
            expect(dados.name).toBe("Nome")
        })
    })
})

describe("UPDATE route test", () =>{
    it("Deve editar o nome e atualizar no banco de dados", () =>{
        
    const media = new mediaModel({
        "name": "Nome",
        "director": "pessoa",
        "releaseDate": 2005,
        "genre": "ação",
        "available": true,
        "description": "descrição",
        "rating": 5,
        "type": "Game"
        })
        media.name = "novo nome"
        media.save().then((dados)=>{
            expect(dados.name).toBe("novo nome")
        })
    })
})

describe("DELETE route test", () =>{
    it("Deve deletar a mídia do banco de dados", () =>{
        
    const media = new mediaModel({
        "name": "Nome",
        "director": "pessoa",
        "releaseDate": 2005,
        "genre": "ação",
        "available": true,
        "description": "descrição",
        "rating": 5,
        "type": "Game"
        })
            media.save().then((dados)=>{
            media.delete().then((novosDados) =>{
            expect(dados.name).toBe(null)
            })
        })
    })
})