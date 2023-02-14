
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const GASYMODS_GAME_SYS_MONSTER_DESC = await db.sequelize.models.GASYMODS_GAME_SYS_MONSTER_DESC.findAll();
    res.status(200).json(GASYMODS_GAME_SYS_MONSTER_DESC);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const GASYMODS_GAME_SYS_MONSTER_DESC = await db.sequelize.models.GASYMODS_GAME_SYS_MONSTER_DESC.findByPk(id);
    if (GASYMODS_GAME_SYS_MONSTER_DESC) {
        res.status(200).json(GASYMODS_GAME_SYS_MONSTER_DESC);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    