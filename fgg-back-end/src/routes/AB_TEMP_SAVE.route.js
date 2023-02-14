
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const AB_TEMP_SAVE = await db.sequelize.models.AB_TEMP_SAVE.findAll();
    res.status(200).json(AB_TEMP_SAVE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const AB_TEMP_SAVE = await db.sequelize.models.AB_TEMP_SAVE.findByPk(id);
    if (AB_TEMP_SAVE) {
        res.status(200).json(AB_TEMP_SAVE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    