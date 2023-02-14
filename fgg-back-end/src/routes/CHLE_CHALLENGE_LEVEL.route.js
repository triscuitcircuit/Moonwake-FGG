
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const CHLE_CHALLENGE_LEVEL = await db.sequelize.models.CHLE_CHALLENGE_LEVEL.findAll();
    res.status(200).json(CHLE_CHALLENGE_LEVEL);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const CHLE_CHALLENGE_LEVEL = await db.sequelize.models.CHLE_CHALLENGE_LEVEL.findByPk(id);
    if (CHLE_CHALLENGE_LEVEL) {
        res.status(200).json(CHLE_CHALLENGE_LEVEL);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    