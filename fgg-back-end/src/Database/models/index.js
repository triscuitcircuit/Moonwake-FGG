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
const modelDefines =[
    require("./AB_ATTRIBUTE"),
    require("./AB_TEMP_SAVE"),
    require("./ABCA_ATTRIBUTE_CATEGORY"),
    require("./AK_ATTACK"),
    require("./AKCA_ATTACK_CATEGORY"),
    require("./AKTY_ATTACK_TYPE"),
    require("./AL_ALIGNMENT"),
    require("./AT_ACTION"),
    require("./ATCL_ACTION_CLASS"),
    require("./ATDE_ACTION_DETAIL"),
    require("./ATTG_ACTION_TAG"),
    require("./CD_CONDITION"),
    require("./CHCL_CHARACTER_CLASS"),
    require("./CHCLSP_CHARACTER_CLASS_SPELL"),
    require("./CHLE_CHALLENGE_LEVEL"),
    require("./DATY_DAMAGE_TYPE"),
    require("./ER_ERROR"),
    require("./FAUSAS_FAILED_USER_ACCESS"),
    require("./GACO_GAME_COMPANY"),
    require("./GACODTSH_GAME_COMP_DATA_SHARE"),
    require("./GACOSP_GAME_COMPANY_SPELL"),
    require("./GASY_GAME_SYSTEM"),
    require("./GASYMO_GAME_SYSTEM_MONSTER"),
    require("./GASYMODS_GAME_SYS_MONSTER_DESC"),
    require("./GASYMOST_GAME_SYS_MONST_STATUS"),
    require("./LOAD_ATTACK"),
    require("./LOAD_ATTACK2"),
    require("./LOAD_SPELL"),
    require("./LOAD_TRAIT"),
    require("./LOAD_TRAIT2"),
    require("./MO_MONSTER"),
    require("./MOAB_MONSTER_ATTRIBUTE"),
    require("./MOAG_MONSTER_AGGREGATION"),
    require("./MOAK_MONSTER_ATTACK"),
    require("./MOAK_TEMP_SAVE"),
    require("./MOAKDE_MONSTER_ATTACK_DETAIL"),
    require("./MOAL_MONSTER_ALIGNMENT"),
    require("./MOAT_MONSTER_ACTION"),
    require("./MODI_MONSTER_DISPLAY"),
    require("./MOLRAT_MONSTER_LAIR_ACTION"),
    require("./MOMV_MONSTER_MOVEMENT"),
    require("./MOPBRE_MONSTER_PUBLISHED_REF"),
    require("./MOPP_MONSTER_PROPERTY"),
    require("./MOSRTG_MONSTER_SEARCH_TAG"),
    require("./MOST_MONSTER_STATUS"),
    require("./MOTGAK_MONSTER_TRIGGER_ATTACK"),
    require("./MOTT_MONSTER_TRAIT"),
    require("./MOTY_MONSTER_TYPE"),
    require("./MVTY_MOVEMENT_TYPE"),
    require("./PBRE_PUBLISHED_REFERENCE"),
    require("./PP_PROPERTY"),
    require("./PPCA_PROPERTY_CATEGORY"),
    require("./RENO_REVIEW_NOTES"),
    require("./RO_ROLE"),
    require("./RR_RARITY"),
    require("./SE_SENSE"),
    require("./SK_SKILL"),
    require("./SK_SPELL"),
    require("./SPCMTY_SPELL_COMPONENT_TYPE"),
    require("./SPSC_SPELL_SCHOOL"),
    require("./SPTY_SPELL_TYPE"),
    require("./ST_STATUS"),
    require("./SVTH_SAVING_THROW"),
    require("./SZ_SIZE"),
    require("./TEST_TABLE"),
    require("./TGTY_TAG_TYPE"),
    require("./TT_TRAIT"),
    require("./US_USER"),
    require("./USAS_USER_ACCESS"),
    require("./USASLO_USER_ACCESS_LOG"),
    require("./USGASYMO_USER_GAME_SYS_MONSTER"),
    require("./USRO_USER_ROLE")
]

for (const modelDefiner of modelDefines){
    modelDefiner(sequelize)
}

// TODO: move this to models?
function applyExtraSetup(sequelize) {
    const { AB_ATTRIBUTE, CHLE_CHALLENGE_LEVEL,
        GASYMO_GAME_SYSTEM_MONSTER, MOTY_MONSTER_TYPE, SZ_SIZE
        , GACO_GAME_COMPANY, MOAB_MONSTER_ATTRIBUTE} = sequelize.models;

    AB_ATTRIBUTE.hasMany(MOAB_MONSTER_ATTRIBUTE,{
        foreignKey: 'AB_ID'})
    MOAB_MONSTER_ATTRIBUTE.belongsTo(AB_ATTRIBUTE,{
        foreignKey: 'AB_ID'})

    GASYMO_GAME_SYSTEM_MONSTER.hasMany(MOAB_MONSTER_ATTRIBUTE,
        {foreignKey: 'GASYMO_ID'})
    GASYMO_GAME_SYSTEM_MONSTER.hasOne(CHLE_CHALLENGE_LEVEL,
        {foreignKey: {
                name:"CHLE_ID",
                allowNull: false
            },
            sourceKey: 'CHLE_ID'
        })
    GASYMO_GAME_SYSTEM_MONSTER.hasOne(MOTY_MONSTER_TYPE,
        {foreignKey: {
                name:"MOTY_ID",
                allowNull: false
            },
            sourceKey: 'SEC_MOTY_ID'
        })

    GASYMO_GAME_SYSTEM_MONSTER.hasOne(SZ_SIZE,
        {foreignKey: {
                name:"SZ_ID",
                allowNull: false
            },
            sourceKey: 'SZ_ID'
        })
    GASYMO_GAME_SYSTEM_MONSTER.hasOne(GACO_GAME_COMPANY,
        {foreignKey: {
                name:"GACO_ID",
                allowNull: false
            },
            sourceKey: 'GACO_ID'
        })

    CHLE_CHALLENGE_LEVEL.belongsTo(GASYMO_GAME_SYSTEM_MONSTER,
        {foreignKey:"CHLE_ID"})
    MOAB_MONSTER_ATTRIBUTE.belongsTo(GASYMO_GAME_SYSTEM_MONSTER,
        {foreignKey: 'GASYMO_ID'})
}

applyExtraSetup(sequelize)

db.sequelize.modelManager.models.forEach(model=>{
    console.log("Generated routes for table: "+
        model.tableName);
    console.log(model.associations);
});

module.exports = db;
