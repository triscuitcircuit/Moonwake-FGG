
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const LOAD_TRAIT = await db.sequelize.models.LOAD_TRAIT.findAll();
    res.status(200).json(LOAD_TRAIT);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const LOAD_TRAIT = await db.sequelize.models.LOAD_TRAIT.findByPk(id);
    if (LOAD_TRAIT) {
        res.status(200).json(LOAD_TRAIT);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]