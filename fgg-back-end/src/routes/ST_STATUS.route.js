
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const ST_STATUS = await db.sequelize.models.ST_STATUS.findAll();
    res.status(200).json(ST_STATUS);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const ST_STATUS = await db.sequelize.models.ST_STATUS.findByPk(id);
    if (ST_STATUS) {
        res.status(200).json(ST_STATUS);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    