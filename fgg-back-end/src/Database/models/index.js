const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const dbConfig = require("../config/db.config");
const ck = require("ckey");
const db = require("../index");
const basename = path.basename(__filename);


const sequelize = new Sequelize(
    'orcl',
    "fggdata",
    "m00nwak3data",{
      port: 1521,
      host: "fggdb2.cpdlwkeahawx.us-east-2.rds.amazonaws.com",
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

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.list = [
    require("./AB_ATTRIBUTE")(sequelize, Sequelize),
    require("./ABCA_ATTRIBUTE_CATEGORY")(sequelize, Sequelize),
    require("./AB_TEMP_SAVE")(sequelize, Sequelize),
    require("./AK_ATTACK")(sequelize, Sequelize),
    require("./AKCA_ATTACK_CATEGORY")(sequelize, Sequelize),
    require("./AKTY_ATTACK_TYPE")(sequelize, Sequelize),
    require("./AL_ALIGNMENT")(sequelize, Sequelize),
    require("./AT_ACTION")(sequelize, Sequelize),
    require("./ATCL_ACTION_CLASS")(sequelize, Sequelize),
    require("./ATDE_ACTION_DETAIL")(sequelize, Sequelize),
    require("./ATTG_ACTION_TAG")(sequelize, Sequelize),
    require("./MOAK_MONSTER_ATTACK")(sequelize, Sequelize),
    require("./ST_STATUS")(sequelize, Sequelize),
    require("./RO_ROLE")(sequelize, Sequelize),
    require("./USRO_USER_ROLE")(sequelize, Sequelize),
    require("./USASLO_USER_ACCESS_LOG")(sequelize, Sequelize),
    require("./MOAK_TEMP_SAVE")(sequelize, Sequelize),
    require("./USAS_USER_ACCESS")(sequelize, Sequelize),
    require("./LOAD_SPELL")(sequelize, Sequelize),
    require("./US_USER")(sequelize, Sequelize),
    require("./USGASYMO_USER_GAME_SYS_MONSTER")(sequelize, Sequelize),


];
db.list.forEach(model=>{
   console.log("Generated routes for table: "+
       model.tableName);
});

module.exports = db;
