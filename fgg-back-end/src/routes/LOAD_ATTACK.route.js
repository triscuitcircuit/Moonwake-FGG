
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const LOAD_ATTACK = await db.sequelize.models.LOAD_ATTACK.findAll();
    res.status(200).json(LOAD_ATTACK);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const LOAD_ATTACK = await db.sequelize.models.LOAD_ATTACK.findByPk(id);
    if (LOAD_ATTACK) {
        res.status(200).json(LOAD_ATTACK);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]