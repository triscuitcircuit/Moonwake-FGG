
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const CHCLSP_CHARACTER_CLASS_SPELL = await db.sequelize.models.CHCLSP_CHARACTER_CLASS_SPELL.findAll();
    res.status(200).json(CHCLSP_CHARACTER_CLASS_SPELL);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const CHCLSP_CHARACTER_CLASS_SPELL = await db.sequelize.models.CHCLSP_CHARACTER_CLASS_SPELL.findByPk(id);
    if (CHCLSP_CHARACTER_CLASS_SPELL) {
        res.status(200).json(CHCLSP_CHARACTER_CLASS_SPELL);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    