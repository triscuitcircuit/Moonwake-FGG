const express = require("express");
const cors = require("cors");
const db = require("./Database");
const logger = require('morgan');
const bodyParser = require('body-parser');

routes = {
    AB_ATTRIBUTE: require('./routes/AB_ATTRIBUTE.route'),
    AB_TEMP_SAVE: require('./routes/AB_TEMP_SAVE.route'),
    ABCA_ATTRIBUTE_CATEGORY: require('./routes/ABCA_ATTRIBUTE_CATEGORY.route'),
    AK_ATTACK: require('./routes/AK_ATTACK.route'),
    AKCA_ATTACK_CATEGORY: require('./routes/AKCA_ATTACK_CATEGORY.route'),
    AKTY_ATTACK_TYPE: require('./routes/AKTY_ATTACK_TYPE.route'),
    AL_ALIGNMENT: require('./routes/AL_ALIGNMENT.route'),
    AT_ACTION: require('./routes/AT_ACTION.route'),
    ATCL_ACTION_CLASS: require('./routes/ATCL_ACTION_CLASS.route'),
    ATDE_ACTION_DETAIL: require('./routes/ATDE_ACTION_DETAIL.route'),
    ATTG_ACTION_TAG: require('./routes/ATTG_ACTION_TAG.route'),
    CD_CONDITION: require('./routes/CD_CONDITION.route'),
    CHCL_CHARACTER_CLASS: require('./routes/CHCL_CHARACTER_CLASS.route'),
    CHCLSP_CHARACTER_CLASS_SPELL: require('./routes/CHCLSP_CHARACTER_CLASS_SPELL.route'),
    CHLE_CHALLENGE_LEVEL: require('./routes/CHLE_CHALLENGE_LEVEL.route'),
    DATY_DAMAGE_TYPE: require('./routes/DATY_DAMAGE_TYPE.route'),
    ER_ERROR: require('./routes/ER_ERROR.route'),
    FAUSAS_FAILED_USER_ACCESS: require('./routes/FAUSAS_FAILED_USER_ACCESS.route'),
    GACO_GAME_COMPANY: require('./routes/GACO_GAME_COMPANY.route'),
    GACODTSH_GAME_COMP_DATA_SHARE: require('./routes/GACODTSH_GAME_COMP_DATA_SHARE.route'),
    GACOSP_GAME_COMPANY_SPELL: require('./routes/GACOSP_GAME_COMPANY_SPELL.route'),
    GASY_GAME_SYSTEM: require('./routes/GASY_GAME_SYSTEM.route'),
    GASYMO_GAME_SYSTEM_MONSTER: require('./routes/GASYMO_GAME_SYSTEM_MONSTER.route'),
    GASYMODS_GAME_SYS_MONSTER_DESC: require('./routes/GASYMODS_GAME_SYS_MONSTER_DESC.route'),
    GASYMOST_GAME_SYS_MONST_STATUS: require('./routes/GASYMOST_GAME_SYS_MONST_STATUS.route'),
    LOAD_ATTACK: require('./routes/LOAD_ATTACK.route'),
    LOAD_ATTACK2: require('./routes/LOAD_ATTACK2.route'),
    LOAD_SPELL: require('./routes/LOAD_SPELL.route'),
    LOAD_TRAIT: require('./routes/LOAD_TRAIT.route'),
    LOAD_TRAIT2: require('./routes/LOAD_TRAIT2.route'),
    MO_MONSTER: require('./routes/MO_MONSTER.route'),
    MOAB_MONSTER_ATTRIBUTE: require('./routes/MOAB_MONSTER_ATTRIBUTE.route'),
    MOAG_MONSTER_AGGREGATION: require('./routes/MOAG_MONSTER_AGGREGATION.route'),
    MOAK_MONSTER_ATTACK: require('./routes/MOAK_MONSTER_ATTACK.route'),
    MOAK_TEMP_SAVE: require('./routes/MOAK_TEMP_SAVE.route'),
    MOAKDE_MONSTER_ATTACK_DETAIL: require('./routes/MOAKDE_MONSTER_ATTACK_DETAIL.route'),
    MOAL_MONSTER_ALIGNMENT: require('./routes/MOAL_MONSTER_ALIGNMENT.route'),
    MOAT_MONSTER_ACTION: require('./routes/MOAT_MONSTER_ACTION.route'),
    MODI_MONSTER_DISPLAY: require('./routes/MODI_MONSTER_DISPLAY.route'),
    MOLRAT_MONSTER_LAIR_ACTION: require('./routes/MOLRAT_MONSTER_LAIR_ACTION.route'),
    MOMV_MONSTER_MOVEMENT: require('./routes/MOMV_MONSTER_MOVEMENT.route'),
    MOPBRE_MONSTER_PUBLISHED_REF: require('./routes/MOPBRE_MONSTER_PUBLISHED_REF.route'),
    MOPP_MONSTER_PROPERTY: require('./routes/MOPP_MONSTER_PROPERTY.route'),
    MOSRTG_MONSTER_SEARCH_TAG: require('./routes/MOSRTG_MONSTER_SEARCH_TAG.route'),
    MOST_MONSTER_STATUS: require('./routes/MOST_MONSTER_STATUS.route'),
    MOTGAK_MONSTER_TRIGGER_ATTACK: require('./routes/MOTGAK_MONSTER_TRIGGER_ATTACK.route'),
    MOTT_MONSTER_TRAIT: require('./routes/MOTT_MONSTER_TRAIT.route'),
    MOTY_MONSTER_TYPE: require('./routes/MOTY_MONSTER_TYPE.route'),
    MVTY_MOVEMENT_TYPE: require('./routes/MVTY_MOVEMENT_TYPE.route'),
    PBRE_PUBLISHED_REFERENCE: require('./routes/PBRE_PUBLISHED_REFERENCE.route'),
    PP_PROPERTY: require('./routes/PP_PROPERTY.route'),
    PPCA_PROPERTY_CATEGORY: require('./routes/PPCA_PROPERTY_CATEGORY.route'),
    RENO_REVIEW_NOTES: require('./routes/RENO_REVIEW_NOTES.route'),
    RO_ROLE: require('./routes/RO_ROLE.route'),
    RR_RARITY: require('./routes/RR_RARITY.route'),
    SE_SENSE: require('./routes/SE_SENSE.route'),
    SK_SKILL: require('./routes/SK_SKILL.route'),
    // SP_SPELL: require('./routes/SP_SPELL.route'),
    SPCMTY_SPELL_COMPONENT_TYPE: require('./routes/SPCMTY_SPELL_COMPONENT_TYPE.route'),
    SPSC_SPELL_SCHOOL: require('./routes/SPSC_SPELL_SCHOOL.route'),
    SPTY_SPELL_TYPE: require('./routes/SPTY_SPELL_TYPE.route'),
    ST_STATUS: require('./routes/ST_STATUS.route'),
    SVTH_SAVING_THROW: require('./routes/SVTH_SAVING_THROW.route'),
    SZ_SIZE: require('./routes/SZ_SIZE.route'),
    TEST_TABLE: require('./routes/TEST_TABLE.route'),
    TGTY_TAG_TYPE: require('./routes/TGTY_TAG_TYPE.route'),
    TT_TRAIT: require('./routes/TT_TRAIT.route'),
    US_USER: require('./routes/US_USER.route'),
    USAS_USER_ACCESS: require('./routes/USAS_USER_ACCESS.route'),
    USASLO_USER_ACCESS_LOG: require('./routes/USASLO_USER_ACCESS_LOG.route'),
    USGASYMO_USER_GAME_SYS_MONSTER: require('./routes/USGASYMO_USER_GAME_SYS_MONSTER.route'),
    USRO_USER_ROLE: require('./routes/USRO_USER_ROLE.route'),
}


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(logger('dev'))

// We create a wrapper to workaround async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handle) {
    return async function (req, res, next) {
        try {
            await handle(req, res);
        } catch (error) {
            next(error);
        }
    };
}

for (const [routeName, routeController] of Object.entries(routes)) {

    app.get(
        `/api/${routeName}`,
        makeHandlerAwareOfAsyncErrors(routeController[0])
    );

    app.get(
        `/api/${routeName}/:id`,
        makeHandlerAwareOfAsyncErrors(routeController[1])
    );

}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database: ', err);
    });

module.exports = app