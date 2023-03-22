const db = require("../Database/models");
const {getIdParam, getPagination, getPagingData} = require('../Database/config/helpers');
const {Op, Sequelize} = require("sequelize");
const {sequelize} = require("sequelize-test-helpers");


async function getAll(req, res) {
    var {page, size,
        name, xp_val, m_size, m_ac} = req.query;
    const {limit, offset} = getPagination(page, size);
    let where = {ST_CODE: "active"}

    let s_include = [
        {all: true, nested: true}
    ]

    if (name){
        // TODO
        // "Ape" and "ape" give different results ...
        where.GASYMO_DISPLAY_NAME = {[Op.like]: '%'+name +"%"}
    }

    if(m_size) {
        s_include.push({
            model: db.sequelize.models.SZ_SIZE,
            where: {SZ_HIT_DICE_VALUE: m_size}})
        }

    if(m_ac)
        where.GASYMO_ARMOR_CLASS = {[Op.eq]: m_ac}


    if(xp_val)
        // TODO
        // check type of xp_val, it needs to be string for this?
        where.GASYMO_XP_VALUE = {[Op.eq]: xp_val}

const GASYMO_GAME_SYSTEM_MONSTER =
        await db.sequelize.models.GASYMO_GAME_SYSTEM_MONSTER.findAndCountAll(
            {
                limit, offset,
                where,
                include: s_include,
            }
        );
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

