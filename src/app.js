/* Importações */
const express = require('express')

/* Variaveis */

const app = express() // Dentro dessa varivalvel temos todos os metodos do Express.
const PORT = 4000




/* Rodar o Server */

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))