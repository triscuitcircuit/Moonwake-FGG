
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const GASY_GAME_SYSTEM = await db.sequelize.models.GASY_GAME_SYSTEM.findAll();
    res.status(200).json(GASY_GAME_SYSTEM);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const GASY_GAME_SYSTEM = await db.sequelize.models.GASY_GAME_SYSTEM.findByPk(id);
    if (GASY_GAME_SYSTEM) {
        res.status(200).json(GASY_GAME_SYSTEM);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    