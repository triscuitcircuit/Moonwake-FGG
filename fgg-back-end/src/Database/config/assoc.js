const Sequelize = require('sequelize');

function applyExtraSetup(sequelize) {
    const { AB_ATTRIBUTE, CHLE_CHALLENGE_LEVEL,
        GASYMO_GAME_SYSTEM_MONSTER, MOTY_MONSTER_TYPE, SZ_SIZE, ABCA_ATTRIBUTE_CATEGORY
        , GACO_GAME_COMPANY, MOAB_MONSTER_ATTRIBUTE, MO_MONSTER} = sequelize.models;


    AB_ATTRIBUTE.hasOne(ABCA_ATTRIBUTE_CATEGORY,{
        foreignKey: 'ABCA_ID',
        sourceKey: "ABCA_ID"})

    //GASYMO GAME SYSTEM MONSTER

    GASYMO_GAME_SYSTEM_MONSTER.hasOne(CHLE_CHALLENGE_LEVEL,
        {foreignKey: {
                name:"CHLE_ID",
                allowNull: false
            },
            sourceKey: 'CHLE_ID'
        })

    GASYMO_GAME_SYSTEM_MONSTER.hasOne(GACO_GAME_COMPANY,
        {foreignKey: {
                name:"GACO_ID",
                allowNull: false
            },
            sourceKey: 'GACO_ID'
        })
    // TABLE IS NOT COMPLETE DO NOT INCLUDE
    // GASYMO_GAME_SYSTEM_MONSTER.hasOne(MO_MONSTER,
    //     {foreignKey: {
    //             name:"MO_ID",
    //             allowNull: false
    //         },
    //         sourceKey: 'MO_ID'
    //     })



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

// Saw in GASYMO_ID
    GASYMO_GAME_SYSTEM_MONSTER.hasMany(MOAB_MONSTER_ATTRIBUTE,
        {foreignKey: 'GASYMO_ID'})



    CHLE_CHALLENGE_LEVEL.belongsTo(GASYMO_GAME_SYSTEM_MONSTER,
        {foreignKey:"CHLE_ID"})
    MOAB_MONSTER_ATTRIBUTE.belongsTo(GASYMO_GAME_SYSTEM_MONSTER,
        {foreignKey: 'GASYMO_ID'})
}

module.exports = {applyExtraSetup};
