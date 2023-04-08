const db = require("../Database/models");
const {getIdParam, getPagination, getPagingData} = require('../Database/config/helpers');
const { Op, Sequelize} = require("sequelize");

// loop thru attributes until a string matches yours? - string will be somewhat pre-built: "STR XX" - all
// MOAB_DISPLAY_TEXT - the 0th thru 5th indices are all the same - for 1 digit values (CHA 8) - the 5th indice will be blank
// limits us to STR 99 - but I think thats ok
// what user types in has to be equal to MOAB_VALUE plus MOAB_BONUS_VALUE

// key = "str"
// value = "STR%20"  (because spaces are replaced by %20 - docs say this should be done auto - keep as space?
// in url:
// &str=STR 16 (+3)
// in route - str will = "STR 16 (+3)"
        // where: MOAB_DISPLAY_TEXT: {[Op.like]: "STR 16 (+3)"}
// ^ means user will have to type in bonus as well
// say we just get STR 16
                //OR together STR 16 (+0) thru +99
// even if its just ?str=16
        // in here that would be "16" - append "STR " to the front of that and then send that to the or generator


// generates all possible capitalizations of a given string
// to make searching for name case insensitive
// returns a list of sequelize commands matching each capitalization against GASYMO_DISPLAY_NAME
// TODO: another function like this for generating an ORed list for a range of values? Is there a simpler way?
//          I can just use gt (greater than), lt, etc - read the docs lol - combine with and AND
function generateCapitalizations(str) {
    let result = [];
    let count = Math.pow(2, str.length); // total number of combinations

    for (let i = 0; i < count; i++) {
        let current = "";
        for (let j = 0; j < str.length; j++) {
            if ((i & Math.pow(2, j))) {
                current += str[j].toUpperCase();
            } else {
                current += str[j].toLowerCase();
            }
        }
        result.push(current);
    }

    let nameORs = [];       // list of sequelize commands on the names to make searching for name case insensitive
    for (let i = 0; i < result.length; i++){
        nameORs.push({GASYMO_DISPLAY_NAME : {[Op.like]:'%'+result[i]+"%"}})
    }

    return nameORs;
}

async function getAll(req, res) {
    const {page, size} = req.query;
    const gAND = req.query.gAND;

    const name1 = req.query.name1;
    const xp_val = req.query.xp_val;
    const m_size = req.query.m_size;

    const m_ac = req.query.m_ac;
    let m_ac_arr = null;
    if (m_ac && m_ac !== "0,99") {
        m_ac_arr = m_ac.split(",");   // turns AC selection into [min AC, max AC]
    }
    const hp = req.query.hp;
    let hp_arr = null;
    if (hp && hp !== "0,99") {                       // TODO: ignore also if range is 0,99?
        hp_arr = hp.split(",");
    }
    const str = req.query.str;
    let str_arr = null;
    if (str && str !== "0,99") {
        str_arr = str.split(",");
    }

    let assocValsExist = false;
    if (str || hp || m_size){
        assocValsExist = true;
    }

    const {limit, offset} = getPagination(page, size);

    let where = {ST_CODE: "active"};

    let s_include = [
        {all: true, nested: true}
    ];

    let strCol;
    if (str){
        strCol = Sequelize.col('MOAB_MONSTER_ATTRIBUTES.MOAB_DISPLAY_TEXT');
    }

    // put stuff the user is searching for here, use ternary operators to handle them being null when not searched for
    // unless value being searched for is an associated attribute - see below
    // (list of ternary operators)
    let content = [
        // oracle doesn't support op.ilike, this is a workaround for making name case insensitive
        // (ex): find the results of Ape OR ape OR APE OR aPe, etc
        name1 ? { [Op.or]: generateCapitalizations(name1)} : null,     // OR's together the list of names from the func
        m_ac ? { GASYMO_ARMOR_CLASS : {[Op.between]: [m_ac_arr[0], m_ac_arr[1]]} } : null,
        str ? {'MOAB_MONSTER_ATTRIBUTES.MOAB_DISPLAY_TEXT' : {[Op.substring]: "STR " + str_arr[0]}} : null // todo figure out how to get associated value properly:  "MOAB_MONSTER_ATTRIBUTE"."MOAB_DISPLAY_TEXT": invalid identifier
      //  str ? {'$MOAB_MONSTER_ATTRIBUTEs.MOAB_DISPLAY_TEXT$': {[Op.substring]: "STR " + str_arr[0]}} : null// add str here - get include statement correct
      //  str ? Sequelize.literal('"MOAB_MONSTER_ATTRIBUTE"."MOAB_DISPLAY_TEXT" = \'STR 16(+3)\'') : null
    ];

   // OR or AND the content into the where statement depending on if global AND is toggled on or off
    if (gAND === "false"){
        where[Op.or] = content;
    }
    else{
        where[Op.and] = content;
    }

    // if (str) {
    //     s_include.push({
    //             model: db.sequelize.models.MOAB_MONSTER_ATTRIBUTE,
    //             attributes: ['MOAB_DISPLAY_TEXT']
    //         })
    //     //where.MOAB_MONSTER_ATTRIBUTE = { MOAB_DISPLAY_TEXT: {[Op.like]: "%STR 16(+3)%"}};
    // }
    // attributes outside of GASYMO_GAME_SYSTEM_MONSTER:
    // TODO: these force AND when they shouldn't when user is searching for them
    // meaning the outside attributes take priority and will ignore what the user has set for the inside ones
    // let attbContent = [
    //     str ? {MOAB_DISPLAY_TEXT: {[Op.substring]: "STR " + str_arr[0]}} : null // todo make func for str range + beyond
    // ]
    //
    // if (gAND === "false") {
    //     s_include.push({
    //             model: db.sequelize.models.MOAB_MONSTER_ATTRIBUTE,
    //             where: {[Op.or]: attbContent}
    //         }
    //     )
    // }
    // else{
    //     s_include.push({
    //             model: db.sequelize.models.MOAB_MONSTER_ATTRIBUTE,
    //             where: {[Op.and]: attbContent}
    //         }
    //     )
    // }
    // // TODO: get below attributes into content variable above-----------------------------------
    //
    // //  // this gets data from an associated table, not
    // //  // GASYMO_GAME_SYSTEM_MONSTER, which is why it looks like this
    // //  if(m_size) {
    // //      s_include.push({
    // //          model: db.sequelize.models.SZ_SIZE,
    // //          where: {SZ_HIT_DICE_VALUE: m_size}})
    // //      }
    //
    // //  if(xp_val)
    // //      // TODO
    // //      // check type of xp_val, it needs to be string for this?
    // //      where.GASYMO_XP_VALUE = {[Op.eq]: xp_val + '%'}
    //
    // // // if (rMin_hp && rMax_hp){
    // //      // TODO
    // //      // HP is No. of Hit Dice x Hit Dice size + Con Mod
    // //      // need to get constitution to calc Con Mod
    // //      // could be hard because attributes are laid out in strange way
    //
    //         // hp on MODI_MONSTER_DISPLAY
    //         // on MODI_PRINT_TEXT (where that = Hit Points x - issue : Hit Points 84 (8d10+40) - see if like will work - or contains? - op.startsWith or op.substring
    //         // looks like 5th row is always hit points, however  - same issue tho
    //
    // // // }
    // //--------------------------------------------------------------------------------------------------
    //
    // // create object that will be used as the where statement in the findAndCountAll function below
    // // we need to use global OR/AND so that the associated attributes from within the include
    // // aren't automatically ANDed
    // let finalWhere = where;
    // if (gAND === "true" && assocValsExist == true) {
    //     finalWhere = {[Op.and]: where};
    // }
    // else if (gAND === "false" && assocValsExist == true){
    //     finalWhere = {[Op.or]: where};
    // }
    // else if (gAND === "true"){
    //     delete where.ST_CODE;
    //     finalWhere = [{[Op.and]: where}, {ST_CODE: "active"}];
    // }
    // else if (gAND === "false"){
    //     delete where.ST_CODE;
    //     finalWhere = [{[Op.or]: where}, {ST_CODE: "active"}];
    // }
    // else just add the and or or? and add st code in by itself?
const GASYMO_GAME_SYSTEM_MONSTER =
        await db.sequelize.models.GASYMO_GAME_SYSTEM_MONSTER.findAndCountAll({
            // limit,
            // offset,
            // where: where,
            // include: s_include
            where: {
                [Op.or]: [
                    { GASYMO_DISPLAY_NAME: 'Goblin' },
                    Sequelize.where(Sequelize.col('MOAB_MONSTER_ATTRIBUTEs.MOAB_DISPLAY_TEXT'), 'STR 8(-1)') //LOOKS LIKE THIS WORKED!!! But problem with how creature-database.tsx gets everything ... work around here or there?
                ]
            },
            include: [
                {all: true, nested: true},
                {
                    model: db.sequelize.models.MOAB_MONSTER_ATTRIBUTE,
                    attributes: []
                }
            ],
            attributes: [
                'GASYMO_DISPLAY_NAME',
                [Sequelize.col('MOAB_MONSTER_ATTRIBUTEs.MOAB_DISPLAY_TEXT'), 'MOAB_DISPLAY_TEXT']
            ]
        });
console.log("WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",GASYMO_GAME_SYSTEM_MONSTER);
    res.status(200).send(getPagingData(GASYMO_GAME_SYSTEM_MONSTER, page, limit))
}


async function getById(req, res) {
    const id = getIdParam(req);
    const GASYMO_GAME_SYSTEM_MONSTER = await db.sequelize.models.GASYMO_GAME_SYSTEM_MONSTER.findByPk(id,
        {
            where: {ST_CODE: "active"},
            include: [
                {all: true, nested: true}
            ],
        });
    if (GASYMO_GAME_SYSTEM_MONSTER) {
        res.status(200).json(GASYMO_GAME_SYSTEM_MONSTER);
    } else {
        res.status(404).send('404 - Not found');
    }
}


module.exports = [
    getAll,
    getById
]

