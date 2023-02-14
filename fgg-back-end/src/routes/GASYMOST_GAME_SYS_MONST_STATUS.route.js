
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const GASYMOST_GAME_SYS_MONST_STATUS = await db.sequelize.models.GASYMOST_GAME_SYS_MONST_STATUS.findAll();
    res.status(200).json(GASYMOST_GAME_SYS_MONST_STATUS);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const GASYMOST_GAME_SYS_MONST_STATUS = await db.sequelize.models.GASYMOST_GAME_SYS_MONST_STATUS.findByPk(id);
    if (GASYMOST_GAME_SYS_MONST_STATUS) {
        res.status(200).json(GASYMOST_GAME_SYS_MONST_STATUS);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    