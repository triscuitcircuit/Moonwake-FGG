
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const LOAD_TRAIT2 = await db.sequelize.models.LOAD_TRAIT2.findAll();
    res.status(200).json(LOAD_TRAIT2);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const LOAD_TRAIT2 = await db.sequelize.models.LOAD_TRAIT2.findByPk(id);
    if (LOAD_TRAIT2) {
        res.status(200).json(LOAD_TRAIT2);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    