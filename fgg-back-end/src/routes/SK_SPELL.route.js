
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const SK_SPELL = await db.sequelize.models.SK_SPELL.findAll();
    res.status(200).json(SK_SPELL);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const SK_SPELL = await db.sequelize.models.SK_SPELL.findByPk(id);
    if (SK_SPELL) {
        res.status(200).json(SK_SPELL);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    