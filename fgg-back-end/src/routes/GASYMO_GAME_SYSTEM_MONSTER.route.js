const db = require("../Database/models");
const {getIdParam, getPagination, getPagingData} = require('../Database/config/helpers');
const {Op, Sequelize} = require("sequelize");
const {sequelize} = require("sequelize-test-helpers");

async function getAll(req, res) {
    var {page, size} = req.query;
    var gAND = req.query.gAND;

    var name1 = req.query.name1;
    var xp_val = req.query.xp_val;
    var m_ac = req.query.m_ac;
    var m_size = req.query.m_size;
    var rMin_hp = req.query.rMin_hp;
    var rMax_hp = req.query.rMax_hp;

    const {limit, offset} = getPagination(page, size);

    let where = {ST_CODE: "active"};

   // put stuff the user is searching for here, use ternary operators to handle them being null when not searched for
    let content = [
        name1 ? { GASYMO_DISPLAY_NAME : {[Op.like]:'%'+name1 +"%"}} : null,
        m_ac ? { GASYMO_ARMOR_CLASS : {[Op.eq]: m_ac} } : null
    ];

   // OR or AND the content into the where statement depending on if global AND is toggled on or off
    if (gAND[1] == "false"){
        where[Op.or] = content;
    }
    else{
        where[Op.and] = content;
    }

    let s_include = [
        {all: true, nested: true}
    ];

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

