const Sequelize = require('sequelize');

function applyExtraSetup(sequelize) {
    const {
        AB_ATTRIBUTE, CHLE_CHALLENGE_LEVEL,
        GASYMO_GAME_SYSTEM_MONSTER, MOTY_MONSTER_TYPE, MOAK_MONSTER_ATTACK,
        SZ_SIZE, ABCA_ATTRIBUTE_CATEGORY, MODI_MONSTER_DISPLAY
        , GACO_GAME_COMPANY, MOAB_MONSTER_ATTRIBUTE, MO_MONSTER, ST_STATUS,
        GASYMODS_GAME_SYS_MONSTER_DESC, MOLRAT_MONSTER_LAIR_ACTION, MOSRTG_MONSTER_SEARCH_TAG,
        GASYMOST_GAME_SYS_MONST_STATUS,//comment this out if it does not work
        MOAL_MONSTER_ALIGNMENT,ER_ERROR,MOAT_MONSTER_ACTION,
        MOMV_MONSTER_MOVEMENT,MOPP_MONSTER_PROPERTY,RENO_GASYMO_ID_FK,
        USGASYMO_GASYMO_ID_FK,MOPBRE_GASYMO_ID_FK,

    } = sequelize.models;

//Try second foreign key?!?!
//     AB_ATTRIBUTE.hasOne(ABCA_ATTRIBUTE_CATEGORY, {
//         foreignKey: 'ABCA_ID',
//         sourceKey: "ABCA_ID"
//     })


    //CORRECT
    GASYMO_GAME_SYSTEM_MONSTER.hasOne(CHLE_CHALLENGE_LEVEL,
        {
            foreignKey: {
                name: "CHLE_ID",
                allowNull: false
            },
            sourceKey: 'CHLE_ID'
        })
    //CORRECT
    GASYMO_GAME_SYSTEM_MONSTER.hasOne(GACO_GAME_COMPANY,
        {
            foreignKey: {
                name: "GACO_ID",
                allowNull: false
            },
            sourceKey: 'GACO_ID'
        })


    //INCORRECT: "GACO_GAME_COMPANY"."GASYMO_ID": invalid identifier
    // MOSRTG_MONSTER_SEARCH_TAG.hasOne(GACO_GAME_COMPANY,
    //     {
    //         foreignKey: {
    //             name: "GASYMO_ID",
    //             allowNull: false
    //         },
    //         sourceKey: 'GASYMO_ID'
    //     })


    // CORRECT
    GASYMO_GAME_SYSTEM_MONSTER.hasOne(MO_MONSTER,
        {foreignKey: {
                name:"MO_ID",
                allowNull: false
            },
            sourceKey: 'MO_ID'
        })

    //CORRECT
    GASYMO_GAME_SYSTEM_MONSTER.hasOne(MOTY_MONSTER_TYPE,
        {
            foreignKey: {
                name: "MOTY_ID",
                allowNull: false
            },
            sourceKey: 'SEC_MOTY_ID'
        })

    //CORRECT
    GASYMO_GAME_SYSTEM_MONSTER.hasOne(SZ_SIZE,
        {
            foreignKey: {
                name: "SZ_ID",
                allowNull: false
            },
            sourceKey: 'SZ_ID'
        })

    //CORRECT
    GASYMO_GAME_SYSTEM_MONSTER.hasOne(ST_STATUS,
        {
            foreignKey: {
                name: "ST_CODE",
                allowNull: false
            },
            sourceKey: 'ST_CODE'
        })

    //INCORRECT: RUNS BUT DOES NOT DISPLAY:
    //EMPTY TABLE
    //HASONE OR HASMANY WORK
    GASYMODS_GAME_SYS_MONSTER_DESC.hasMany(GASYMO_GAME_SYSTEM_MONSTER,
        {
            foreignKey: {
                name: "GASYMO_ID",
                allowNull: false
            },
            sourceKey: 'GASYMO_ID'
        })
    //INCORRECT: RUNS BUT DOES NOT DISPLAY
    //NOT EMPTY
    MOLRAT_MONSTER_LAIR_ACTION.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
        {
            foreignKey: {
                name: "GASYMO_ID",
                allowNull: false
            },
            sourceKey: 'GASYMO_ID'
        })

    //INCORRECT: RUNS BUT DOES NOT DISPLAY
    MOAB_MONSTER_ATTRIBUTE.hasOne(GASYMO_GAME_SYSTEM_MONSTER,//DUAL
        {
            foreignKey: {
                name: "GASYMO_ID",
                allowNull: false
            },
            sourceKey: 'GASYMO_ID'
        })

    //INCORRECT: RUNS BUT DOES NOT DISPLAY
    MODI_MONSTER_DISPLAY.hasOne(GASYMO_GAME_SYSTEM_MONSTER,//DUAL
        {
            foreignKey: {
                name: "GASYMO_ID",
                allowNull: false
            },
            sourceKey: 'GASYMO_ID'
        })

    //INCORRECT: RUNS BUT DOES NOT DISPLAY
    MOSRTG_MONSTER_SEARCH_TAG.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
        {
            foreignKey: {
                name: "GASYMO_ID",
                allowNull: false
            },
            sourceKey: 'GASYMO_ID'
        })

    //INCORRECT: RUNS BUT DOES NOT DISPLAY
    GASYMOST_GAME_SYS_MONST_STATUS.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
        {
            foreignKey: {
                name: "GASYMO_ID",
                allowNull: false
            },
            sourceKey: 'GASYMO_ID'
        })
    //
    // ER_ERROR.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
    //     {
    //         foreignKey: {
    //             name: "GASYMO_ID",
    //             allowNull: false
    //         },//weird below source
    //         sourceKey: 'ER_RELATED_GASYMO_ID'
    //     })
    //
    // MOAL_MONSTER_ALIGNMENT.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
    //     {
    //         foreignKey: {
    //             name: "GASYMO_ID",//second one
    //             allowNull: false
    //         },
    //         sourceKey: 'GASYMO_ID'
    //     })
    //
    // MOAL_MONSTER_ALIGNMENT.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
    //     {
    //         foreignKey: {
    //             name: "GASYMO_ID",
    //             allowNull: false
    //         },
    //         sourceKey: 'GASYMO_ID'
    //     })
    //
    // MOAT_MONSTER_ACTION.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
    //     {
    //         foreignKey: {
    //             name: "GASYMO_ID",
    //             allowNull: false
    //         },
    //         sourceKey: 'GASYMO_ID'
    //     })
    //
    // MOMV_MONSTER_MOVEMENT.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
    //     {
    //         foreignKey: {
    //             name: "GASYMO_ID",
    //             allowNull: false
    //         },
    //         sourceKey: 'GASYMO_ID'
    //     })
    //
    // MOAK_MONSTER_ATTACK.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
    //     {
    //         foreignKey: {
    //             name: "GASYMO_ID",
    //             allowNull: false
    //         },
    //         sourceKey: 'GASYMO_ID'
    //     })
    //
    // MOPP_MONSTER_PROPERTY.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
    //     {
    //         foreignKey: {
    //             name: "GASYMO_ID",
    //             allowNull: false
    //         },
    //         sourceKey: 'GASYMO_ID'
    //     })
    //
    //
    // // MOPBRE_GASYMO_ID_FK.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
    // //     {
    // //         foreignKey: {
    // //             name: "GASYMO_ID",
    // //             allowNull: false
    // //         },
    // //         sourceKey: 'GASYMO_ID'
    // //     })
    // //
    // // USGASYMO_GASYMO_ID_FK.hasOne(GASYMO_GAME_SYSTEM_MONSTER,
    // //     {
    // //         foreignKey: {
    // //             name: "GASYMO_ID",
    // //             allowNull: false
    // //         },
    // //         sourceKey: 'GASYMO_ID'
    // //     })
    //

    //INCORRECT: WILL NOT RUN
    //Also a double :(
    // GASYMODS_GAME_SYS_MONSTER_DESC.hasMany(GASYMO_GAME_SYSTEM_MONSTER,
    //     {
    //         foreignKey: {
    //             name: "GASYMO_ID",
    //             allowNull: false
    //         },
    //         sourceKey: "GASYMO_ID"
    //     })

// Saw in GASYMO_ID
//     GASYMO_GAME_SYSTEM_MONSTER.hasMany(MOAB_MONSTER_ATTRIBUTE, //DUAL
//         {foreignKey: 'GASYMO_ID'})
//
//     GASYMO_GAME_SYSTEM_MONSTER.hasMany(MOAK_MONSTER_ATTACK,
//         {foreignKey: 'GASYMO_ID'})
//
//     GASYMO_GAME_SYSTEM_MONSTER.hasMany(MODI_MONSTER_DISPLAY, //DUAL
//         {foreignKey: 'GASYMO_ID'})
//
//
//     CHLE_CHALLENGE_LEVEL.belongsTo(GASYMO_GAME_SYSTEM_MONSTER,
//         {foreignKey: "CHLE_ID"})
//     MOAB_MONSTER_ATTRIBUTE.belongsTo(GASYMO_GAME_SYSTEM_MONSTER, //DUAL
//         {foreignKey: 'GASYMO_ID'})
}

module.exports = {applyExtraSetup};
