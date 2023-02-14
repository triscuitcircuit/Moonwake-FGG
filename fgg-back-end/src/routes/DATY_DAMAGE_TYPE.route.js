
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const DATY_DAMAGE_TYPE = await db.sequelize.models.DATY_DAMAGE_TYPE.findAll();
    res.status(200).json(DATY_DAMAGE_TYPE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const DATY_DAMAGE_TYPE = await db.sequelize.models.DATY_DAMAGE_TYPE.findByPk(id);
    if (DATY_DAMAGE_TYPE) {
        res.status(200).json(DATY_DAMAGE_TYPE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    