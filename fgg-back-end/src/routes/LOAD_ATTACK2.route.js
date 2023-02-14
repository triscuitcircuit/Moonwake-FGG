
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const LOAD_ATTACK2 = await db.sequelize.models.LOAD_ATTACK2.findAll();
    res.status(200).json(LOAD_ATTACK2);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const LOAD_ATTACK2 = await db.sequelize.models.LOAD_ATTACK2.findByPk(id);
    if (LOAD_ATTACK2) {
        res.status(200).json(LOAD_ATTACK2);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    