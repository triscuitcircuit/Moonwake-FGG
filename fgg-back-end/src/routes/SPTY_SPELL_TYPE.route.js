
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const SPTY_SPELL_TYPE = await db.sequelize.models.SPTY_SPELL_TYPE.findAll();
    res.status(200).json(SPTY_SPELL_TYPE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const SPTY_SPELL_TYPE = await db.sequelize.models.SPTY_SPELL_TYPE.findByPk(id);
    if (SPTY_SPELL_TYPE) {
        res.status(200).json(SPTY_SPELL_TYPE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]