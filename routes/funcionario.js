const express = require('express')
const router = express.Router()// Módulo que irá trabalhar com rotas

const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')

//CRIANDO ROTAS
//1ª ROTA - INSERIR DADOS NA TABELA
router.post('/store',async(req, res)=>{
    const resultado = await funcionario.create({
        nome : req.body.nome,
        salario:req.body.salario,
        cargo:req.body.cargo,
        departamentoId:req.body.departamento// esse campo é a chave estrangeira
    })  

    if(resultado){
        res.redirect('/')
    }
    else{
        res.json({erro:"Não foi possível cadastrar os dados"})
    }

})

//2ª ROTA - EXIBIR PÁGINA RAIZ DE FUNCIONÁRIO
router.get('/show',(req, res)=>{
   res.render('funcionario/index')

})

//3ª ROTA - CONSULTAR DADOS DO BANCO
router.get('/',async(req, res)=>{
    let resultado = await funcionario.findAll({include:departamento})// o include:departamento é como o sequelize faz para poder realizar consultas com join
    if(resultado){
        console.log(resultado)
        res.render('funcionario/index',{dados:resultado})
    }
    else{
        console.log("Não foi possível exibir os dados")
    }
})

//4ª ROTA - DELETAR DADOS DO TABELA
// :id significa que iremos passar um valor na rota, ou seja, iremos informar um valor que poderá ser diferente e que será armazenado pela variável :id
router.get('/destroy/:id',async(req, res)=>{
    const resultado = await funcionario.destroy({
        where:{
            id:req.params.id// estamos recebendo o id via parâmetro que está sendo passado na rota, no caso, é o :id que estamos recebendo.
        }
    })
    res.redirect('/')
})

//5ª ROTA - EXIBIR FORMULÁRIO DE CADASTRO
router.get('/create',async(req, res)=>{
    let resultado = await departamento.findAll()
    if(resultado){
        console.log(resultado)
        res.render('funcionario/addFuncionario',{dados:resultado})
    }
    else{
        console.log("Não foi possível carregar nenhum dado")
        res.redirect('/')// redirecionando para a página inicial
    }
    
})

module.exports = router

