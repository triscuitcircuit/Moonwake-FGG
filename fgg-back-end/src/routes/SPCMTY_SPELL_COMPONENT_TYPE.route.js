
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const SPCMTY_SPELL_COMPONENT_TYPE = await db.sequelize.models.SPCMTY_SPELL_COMPONENT_TYPE.findAll();
    res.status(200).json(SPCMTY_SPELL_COMPONENT_TYPE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const SPCMTY_SPELL_COMPONENT_TYPE = await db.sequelize.models.SPCMTY_SPELL_COMPONENT_TYPE.findByPk(id);
    if (SPCMTY_SPELL_COMPONENT_TYPE) {
        res.status(200).json(SPCMTY_SPELL_COMPONENT_TYPE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    