
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const FAUSAS_FAILED_USER_ACCESS = await db.sequelize.models.FAUSAS_FAILED_USER_ACCESS.findAll();
    res.status(200).json(FAUSAS_FAILED_USER_ACCESS);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const FAUSAS_FAILED_USER_ACCESS = await db.sequelize.models.FAUSAS_FAILED_USER_ACCESS.findByPk(id);
    if (FAUSAS_FAILED_USER_ACCESS) {
        res.status(200).json(FAUSAS_FAILED_USER_ACCESS);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    