const dbConfig = require("./config/db.config");
const Sequelize = require("sequelize");
require("dotenv").config()

const sequelize = new Sequelize(
    'orcl',process.env.USERNAME,
    process.env.PASSWORD,{
        port: 1521,
        host: process.env.HOST,
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