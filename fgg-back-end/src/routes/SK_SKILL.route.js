
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const SK_SKILL = await db.sequelize.models.SK_SKILL.findAll();
    res.status(200).json(SK_SKILL);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const SK_SKILL = await db.sequelize.models.SK_SKILL.findByPk(id);
    if (SK_SKILL) {
        res.status(200).json(SK_SKILL);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    