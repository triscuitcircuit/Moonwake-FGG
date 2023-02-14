
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const SVTH_SAVING_THROW = await db.sequelize.models.SVTH_SAVING_THROW.findAll();
    res.status(200).json(SVTH_SAVING_THROW);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const SVTH_SAVING_THROW = await db.sequelize.models.SVTH_SAVING_THROW.findByPk(id);
    if (SVTH_SAVING_THROW) {
        res.status(200).json(SVTH_SAVING_THROW);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    