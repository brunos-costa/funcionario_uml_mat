const database = require('./database')// Importando o banco de dados
const departamento = require('./departamento')// importando a tabela departamento

//CRIANDO A TABELA
const funcionario = database.sequelizeConfig.define(
    'funcionario',// o nome da tabela
    {
        nome:{
            type:database.sequelizeDb.STRING
        },
        salario:{
            type:database.sequelizeDb.FLOAT
        },
        cargo:{
            type:database.sequelizeDb.STRING
        }
    }
)
/*
Não iremos criar os campos 'id_funcionário' e a chave estrangeira, pois o sequelize irá criar esses campos automaticamente, ou seja, tanto a chave primária quanto chave estrangeira são criados pelo sequelize
*/

//CRIANDO A CHAVE ESTRANGEIRA
// Estou dizendo que departamento possui muitos funcionários
departamento.hasMany(funcionario,{
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
})
funcionario.belongsTo(departamento)// Estou dizendo que funcionário pertence a apenas 1 departamento

funcionario.sync()
module.exports = funcionario