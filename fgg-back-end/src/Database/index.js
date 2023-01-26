const dbConfig = require("./config/db.config");
const Sequelize = require("sequelize");
const ck = require("ckey");

const sequelize = new Sequelize(
    'orcl',ck.USERNAME_FGG,
    ck.PASSWORD_FGG,{
        port: 1521,
        host: ck.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        logging: console.log,
        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
);


const db = {};



db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports =db;