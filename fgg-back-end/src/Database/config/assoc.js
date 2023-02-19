const Sequelize = require('sequelize');

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

module.exports = {applyExtraSetup};
