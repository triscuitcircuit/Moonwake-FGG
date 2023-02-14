
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const USASLO_USER_ACCESS_LOG = await db.sequelize.models.USASLO_USER_ACCESS_LOG.findAll();
    res.status(200).json(USASLO_USER_ACCESS_LOG);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const USASLO_USER_ACCESS_LOG = await db.sequelize.models.USASLO_USER_ACCESS_LOG.findByPk(id);
    if (USASLO_USER_ACCESS_LOG) {
        res.status(200).json(USASLO_USER_ACCESS_LOG);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]