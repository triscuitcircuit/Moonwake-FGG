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
    ck.USERNAME_FGG,
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

    require("./CD_CONDITION")(sequelize, Sequelize),
    require("./CHCL_CHARACTER_CLASS")(sequelize, Sequelize),
    require("./CHCLSP_CHARACTER_CLASS_SPELL")(sequelize, Sequelize),
    require("./CHLE_CHALLENGE_LEVEL")(sequelize, Sequelize),
    require("./DATY_DAMAGE_TYPE")(sequelize, Sequelize),
    require("./ER_ERROR")(sequelize, Sequelize),
    require("./ERPMCH_ERROR_PARAMETER_CHECK")(sequelize, Sequelize),
    require("./FAUSAS_FAILED_USER_ACCESS")(sequelize, Sequelize),
    require("./GACO_GAME_COMPANY")(sequelize, Sequelize),
    require("./GACODTSH_GAME_COMP_DATA_SHARE")(sequelize, Sequelize),
    require("./GACOSP_GAME_COMPANY_SPELL")(sequelize, Sequelize),
    require("./GASY_GAME_SYSTEM")(sequelize, Sequelize),
    require("./GASYMO_GAME_SYSTEM_MONSTER")(sequelize, Sequelize),
    require("./GASYMODS_GAME_SYS_MONSTER_DESC")(sequelize, Sequelize),
    require("./GASYMOST_GAME_SYS_MONST_STATUS")(sequelize, Sequelize),
    require("./LOAD_ATTACK")(sequelize, Sequelize),
    require("./LOAD_SPELL")(sequelize, Sequelize),
    require("./LOAD_TRAIT")(sequelize, Sequelize),
    require("./LOAD_TRAIT2")(sequelize, Sequelize),
    require("./MO_MONSTER")(sequelize, Sequelize),
    require("./MOAB_MONSTER_ATTRIBUTE")(sequelize, Sequelize),
    require("./MOAG_MONSTER_AGGREGATION")(sequelize, Sequelize),
    require("./MOAK_TEMP_SAVE")(sequelize, Sequelize),
    require("./MOAK_MONSTER_ATTACK")(sequelize, Sequelize),
    require("./MOAKDE_MONSTER_ATTACK_DETAIL")(sequelize, Sequelize),
    require("./MOAL_MONSTER_ALIGNMENT")(sequelize, Sequelize),
    require("./MOAT_MONSTER_ACTION")(sequelize, Sequelize),
    require("./RO_ROLE")(sequelize, Sequelize),
    require("./ST_STATUS")(sequelize, Sequelize),
    require("./US_USER")(sequelize, Sequelize),
    require("./USAS_USER_ACCESS")(sequelize, Sequelize),
    require("./USASLO_USER_ACCESS_LOG")(sequelize, Sequelize),
    require("./USGASYMO_USER_GAME_SYS_MONSTER")(sequelize, Sequelize),
    require("./USRO_USER_ROLE")(sequelize, Sequelize),
];
db.list.forEach(model=>{
   console.log("Generated routes for table: "+
       model.tableName);
});

module.exports = db;
