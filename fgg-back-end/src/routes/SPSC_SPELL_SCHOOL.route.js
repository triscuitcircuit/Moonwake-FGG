
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const SPSC_SPELL_SCHOOL = await db.sequelize.models.SPSC_SPELL_SCHOOL.findAll();
    res.status(200).json(SPSC_SPELL_SCHOOL);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const SPSC_SPELL_SCHOOL = await db.sequelize.models.SPSC_SPELL_SCHOOL.findByPk(id);
    if (SPSC_SPELL_SCHOOL) {
        res.status(200).json(SPSC_SPELL_SCHOOL);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    