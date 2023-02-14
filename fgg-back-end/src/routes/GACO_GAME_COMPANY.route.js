
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const GACO_GAME_COMPANY = await db.sequelize.models.GACO_GAME_COMPANY.findAll();
    res.status(200).json(GACO_GAME_COMPANY);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const GACO_GAME_COMPANY = await db.sequelize.models.GACO_GAME_COMPANY.findByPk(id);
    if (GACO_GAME_COMPANY) {
        res.status(200).json(GACO_GAME_COMPANY);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    