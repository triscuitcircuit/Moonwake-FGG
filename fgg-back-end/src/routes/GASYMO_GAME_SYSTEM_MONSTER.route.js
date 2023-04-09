const db = require("../Database/models");
const {getIdParam, getPagination, getPagingData} = require('../Database/config/helpers');
const { Op, Sequelize} = require("sequelize");
const {sequelize} = require("sequelize-test-helpers");

// generates all possible capitalizations of a given string
// to make searching for name case insensitive
// returns a list of sequelize commands matching each capitalization against GASYMO_DISPLAY_NAME
function generateCapitalizations(str, column) {
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
        nameORs.push({[column] : {[Op.like]:'%'+result[i]+"%"}})
    }

    return nameORs;
}

// works for any of the associated values that use MOAB_DISPLAY_TEXT (searched via slider ranges anyways)
// takes the string (STR, CHA, INT, etc), the string defining the column,
// as well as the bottom of the range and the top (ints)
// creates a list comparing to every value in that range, allowing us to use Op.or later to get every value of
// STR(or another attribute) the user may be looking for
function generateRangeContent(str, column, min, max){
    let newL = [];

    for (let i = min; i < max; i++) {
        newL.push({[column]: {[Op.like]: str + i + ' %' }});
    }

    return newL;
}

async function getAll(req, res) {
    const {page, size} = req.query;
    const gAND = req.query.gAND;

    // const sortAlphOn = req.query.sortAlphOn;
    // let sortA = false;
    // if (sortAlphOn === "true"){
    //     sortA = true
    // }

    const name1 = req.query.name1;
    const xp_val = req.query.xp_val;
    const m_size = req.query.m_size;

    let m_ac = req.query.m_ac;
    let m_ac_arr;
    if (m_ac && m_ac !== "0,99") {
        m_ac_arr = m_ac.split(",");   // turns AC selection into [min AC, max AC]
    }
    else{
        m_ac = null;
    }

    let hp = req.query.hp;
    let hp_arr;
    if (hp && hp !== "0,99") {
        hp_arr = hp.split(",");
    }
    else{
        hp = null;
    }

    let str = req.query.str;
    let str_arr;
    if (str && str !== "0,99") {
        str_arr = str.split(",");
    }
    else{
        str = null;
    }

    let dex = req.query.dex;
    let dex_arr;
    if (dex && dex !== "0,99") {
        dex_arr = dex.split(",");
    }
    else {
        dex = null;
    }

    let con = req.query.con;
    let con_arr;
    if (con && con !== "0,99") {
        con_arr = con.split(",");
    }
    else {
        con = null;
    }

    let int = req.query.int;
    let int_arr;
    if (int && int !== "0,99") {
        int_arr = int.split(",");
    }
    else {
        int = null;
    }

    let wis = req.query.wis;
    let wis_arr;
    if (wis && wis !== "0,99") {
        wis_arr = wis.split(",");
    }
    else {
        wis = null;
    }

    let chr = req.query.chr;
    let chr_arr;
    if (chr && chr !== "0,99") {
        chr_arr = chr.split(",");
    }
    else {
        chr = null;
    }

    // NOTE: always make sure these line up with the boolean in creature-database.tsx in the front end
    let assocValsExist = false;
    if (str || dex || con || int || wis || chr || hp || m_size){
        assocValsExist = true;
    }

    const {limit, offset} = getPagination(page, size);

    let where = {ST_CODE: "active"};

    let s_include = [
        {all: true, nested: true}
    ];

    // need to OR together the attributes that use the same column since ANDing them wouldn't make sense
    // TODO now stuff gets thru when it shouldn't, obviously
    // fix by counting? looking for 3 attributes = 3 things should show up?
    let attbContent = [
        str ? { [Op.or]: generateRangeContent("STR ", '$MOAB_MONSTER_ATTRIBUTEs.MOAB_DISPLAY_TEXT$',
                parseInt(str_arr[0]), parseInt(str_arr[1]))} : null,
        dex ? { [Op.or]: generateRangeContent("DEX ", '$MOAB_MONSTER_ATTRIBUTEs.MOAB_DISPLAY_TEXT$',
                parseInt(dex_arr[0]), parseInt(dex_arr[1]))} : null,
        con ? { [Op.or]: generateRangeContent("CON ", '$MOAB_MONSTER_ATTRIBUTEs.MOAB_DISPLAY_TEXT$',
                parseInt(con_arr[0]), parseInt(con_arr[1]))} : null,
        int ? { [Op.or]: generateRangeContent("INT ", '$MOAB_MONSTER_ATTRIBUTEs.MOAB_DISPLAY_TEXT$',
                parseInt(int_arr[0]), parseInt(int_arr[1]))} : null,
        wis ? { [Op.or]: generateRangeContent("WIS ", '$MOAB_MONSTER_ATTRIBUTEs.MOAB_DISPLAY_TEXT$',
                parseInt(wis_arr[0]), parseInt(wis_arr[1]))} : null,
        chr ? { [Op.or]: generateRangeContent("CHA ", '$MOAB_MONSTER_ATTRIBUTEs.MOAB_DISPLAY_TEXT$',
                parseInt(chr_arr[0]), parseInt(chr_arr[1]))} : null
    ]

    // put stuff the user is searching for here, use ternary operators to handle them being null when not searched for
    // unless value being searched for is an associated attribute - see below
    // (list of ternary operators):
    let content = [
        // oracle doesn't support op.ilike, this is a workaround for making name case insensitive
        // (ex): find the results of Ape OR ape OR APE OR aPe, etc
        name1 ? { [Op.or]: generateCapitalizations(name1, "GASYMO_DISPLAY_NAME")} : null,     // OR's together the list of names from the func
        m_ac ? { GASYMO_ARMOR_CLASS : {[Op.between]: [m_ac_arr[0], m_ac_arr[1]]} } : null,
        hp ? { [Op.or]: generateRangeContent("Hit Points ", '$MODI_MONSTER_DISPLAYs.MODI_PRINT_TEXT$',
                parseInt(hp_arr[0]), parseInt(hp_arr[1]))} : null,
        m_size ? {[Op.or]: generateCapitalizations(m_size, "$SZ_SIZE.SZ_NAME$")} : null,
        attbContent ? {[Op.or]: attbContent} : null
    ];

    // OR or AND the content into the where statement depending on if global AND is toggled on or off
    if (gAND === "false"){
        where[Op.or] = content;
    }
    else{
        where[Op.and] = content;
    }

    // // TODO: get below attributes into content variable above-----------------------------------
    // //  if(xp_val)
    // //      // TODO
    // //      // check type of xp_val, it needs to be string for this?
    // //      where.GASYMO_XP_VALUE = {[Op.eq]: xp_val + '%'}
    //
    // //--------------------------------------------------------------------------------------------------

    //let GASYMO_GAME_SYSTEM_MONSTER;
    // TODO: below is a workaround for pagentation breaking searching for associated values - fix pagentation
    //if (assocValsExist) {
   const GASYMO_GAME_SYSTEM_MONSTER =
        await db.sequelize.models.GASYMO_GAME_SYSTEM_MONSTER.findAndCountAll({
            where: where,
            include: s_include,
            //order: Sequelize.col([GASYMO_DISPLAY_NAME])
        });
    //}
    // else{
    //     GASYMO_GAME_SYSTEM_MONSTER =
    //         await db.sequelize.models.GASYMO_GAME_SYSTEM_MONSTER.findAndCountAll({
    //             where: where,
    //             include: s_include,
    //             limit: limit,
    //             offset: offset,
    //             //order: Sequelize.col("GASYMO_DISPLAY_NAME")
    //         });         // TODO: add toggles to filter by author, STR, CHA, AC, etc - at the bottom of the page - update user guide! and AM (if bugs), TESTS ); - group by / sort by statement? - another if for if that's checked
    // }
    console.log("AAAAAAAAAA", GASYMO_GAME_SYSTEM_MONSTER);
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

