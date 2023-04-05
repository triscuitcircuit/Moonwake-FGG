const db = require("../Database/models");
const {getIdParam, getPagination, getPagingData} = require('../Database/config/helpers');
const { Op } = require("sequelize");

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
    var {page, size} = req.query;
    var gAND = req.query.gAND;

    var name1 = req.query.name1;
    var xp_val = req.query.xp_val;
    var m_ac = req.query.m_ac;
    var m_size = req.query.m_size;
    var rMin_hp = req.query.rMin_hp; // instead of ranges, passing delimited string in w both values is much smarter
    var rMax_hp = req.query.rMax_hp;
    var str = req.query.str;

    const {limit, offset} = getPagination(page, size);

    let where = {ST_CODE: "active"};

    // put stuff the user is searching for here, use ternary operators to handle them being null when not searched for
    // unless value being searched for is an associated attribute - see below
    // (list of ternary operators)
    let content = [
        // oracle doesn't support op.ilike, this is a workaround for making name case insensitive
        // (ex): find the results of Ape OR ape OR APE OR aPe, etc
        name1 ? { [Op.or]: generateCapitalizations(name1)} : null,
        m_ac ? { GASYMO_ARMOR_CLASS : {[Op.eq]: m_ac} } : null
    ];

   // OR or AND the content into the where statement depending on if global AND is toggled on or off
    if (gAND === "false"){
        where[Op.or] = content;
    }
    else{
        where[Op.and] = content;
    }

    let s_include = [
        {all: true, nested: true}
    ];

    if(str){
        s_include.push({
                    model: db.sequelize.models.MOAB_MONSTER_ATTRIBUTE,
                    where: {MOAB_DISPLAY_TEXT: {[Op.like]: "STR 16 (+3)"}}
            }
        )
    }



    // TODO: get below attributes into content variable above

    //  // this gets data from an associated table, not
    //  // GASYMO_GAME_SYSTEM_MONSTER, which is why it looks like this
    //  if(m_size) {
    //      s_include.push({
    //          model: db.sequelize.models.SZ_SIZE,
    //          where: {SZ_HIT_DICE_VALUE: m_size}})
    //      }

    //  if(xp_val)
    //      // TODO
    //      // check type of xp_val, it needs to be string for this?
    //      where.GASYMO_XP_VALUE = {[Op.eq]: xp_val + '%'}

    // // if (rMin_hp && rMax_hp){
    //      // TODO
    //      // HP is No. of Hit Dice x Hit Dice size + Con Mod
    //      // need to get constitution to calc Con Mod
    //      // could be hard because attributes are laid out in strange way
    // // }


const GASYMO_GAME_SYSTEM_MONSTER =
        await db.sequelize.models.GASYMO_GAME_SYSTEM_MONSTER.findAndCountAll({
            limit,
            offset,
            include: s_include,
            where: where
        });

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

