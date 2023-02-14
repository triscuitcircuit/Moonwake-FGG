
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOAK_TEMP_SAVE = await db.sequelize.models.MOAK_TEMP_SAVE.findAll();
    res.status(200).json(MOAK_TEMP_SAVE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOAK_TEMP_SAVE = await db.sequelize.models.MOAK_TEMP_SAVE.findByPk(id);
    if (MOAK_TEMP_SAVE) {
        res.status(200).json(MOAK_TEMP_SAVE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    