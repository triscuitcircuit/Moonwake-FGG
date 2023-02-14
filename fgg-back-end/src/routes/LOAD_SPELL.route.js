
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const LOAD_SPELL = await db.sequelize.models.LOAD_SPELL.findAll();
    res.status(200).json(LOAD_SPELL);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const LOAD_SPELL = await db.sequelize.models.LOAD_SPELL.findByPk(id);
    if (LOAD_SPELL) {
        res.status(200).json(LOAD_SPELL);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    