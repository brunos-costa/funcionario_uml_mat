// CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const porta = 5000

//CONFIGURAR EXPRESS PARA RECEBER DADOS DO FORMULÁRIO
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//CONFIGURANDO HANDLEBARS
app.engine('handlebars',handlebars.engine({extended:true}))
app.set('view engine','handlebars')//definindo o handlebars como mecanismo de visualização padrão

//CARREGANDO AS ROTAS
const funcionarioRouter = require('./routes/funcionario')

//UTILIZANDO AS ROTAS
app.use('/funcionario',funcionarioRouter)

// EXIBINDO INFORMAÇÕES NA TELA
app.get("/",(req, res)=>{
   // res.send("<h1>Tudo Funcionando</h1>")
   res.render('home')
})

//EXECUTANDO O SERVIDOR
app.listen(porta, ()=>{
    console.log("Servidor executando na porta ", porta)
})