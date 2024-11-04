// CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const porta = 5000

// EXIBINDO INFORMAÇÕES NA TELA
app.get("/",(req, res)=>{
    res.send("<h1>Tudo Funcionando</h1>")
})


//EXECUTANDO O SERVIDOR
app.listen(porta, ()=>{
    console.log("Servidor executando na porta ", porta)
})