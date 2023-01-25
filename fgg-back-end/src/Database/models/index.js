'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const dbConfig = require("../config/db.config");
const basename = path.basename(__filename);
const db = {};

let sequelize;
sequelize = new Sequelize(
    'orcl',process.env.USERNAME,
    process.env.PASSWORD,{
      port: 1521,
      host: process.env.HOST,
      dialect: dbConfig.dialect,
      logging: console.log,
      pool:{
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
      }
    }
);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.ab_attribute = require("./AB_ATTRIBUTE")(sequelize, Sequelize)
db.ab_temp_save = require("./AB_TEMP_SAVE")(sequelize, Sequelize)

module.exports = db;
