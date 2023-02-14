
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const PBRE_PUBLISHED_REFERENCE = await db.sequelize.models.PBRE_PUBLISHED_REFERENCE.findAll();
    res.status(200).json(PBRE_PUBLISHED_REFERENCE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const PBRE_PUBLISHED_REFERENCE = await db.sequelize.models.PBRE_PUBLISHED_REFERENCE.findByPk(id);
    if (PBRE_PUBLISHED_REFERENCE) {
        res.status(200).json(PBRE_PUBLISHED_REFERENCE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    