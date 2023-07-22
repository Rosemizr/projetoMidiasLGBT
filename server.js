const app = require("./obrasLGBT/app")

const DB_PORT = process.env.DB_PORT

app.listen(DB_PORT, () => console.log(`Servidor rodando na porta ${DB_PORT}`))