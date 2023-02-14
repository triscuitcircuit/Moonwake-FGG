
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const SZ_SIZE = await db.sequelize.models.SZ_SIZE.findAll();
    res.status(200).json(SZ_SIZE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const SZ_SIZE = await db.sequelize.models.SZ_SIZE.findByPk(id);
    if (SZ_SIZE) {
        res.status(200).json(SZ_SIZE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    