const {sequelizeDb, sequelizeConfig} = require('./database')// estamos utilizando o recurso de desestruturação de objetos para importar apenas os módulos necessários.

//CRIANDO TABELA
const departamento = sequelizeConfig.define(
    'departamento',
    {
        nome:{
            type:sequelizeDb.STRING
        },
        descricao:{
            type:sequelizeDb.TEXT
        }
    }
)
departamento.sync()
module.exports = departamento