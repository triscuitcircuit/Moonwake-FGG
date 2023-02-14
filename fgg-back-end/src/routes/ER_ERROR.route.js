
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const ER_ERROR = await db.sequelize.models.ER_ERROR.findAll();
    res.status(200).json(ER_ERROR);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const ER_ERROR = await db.sequelize.models.ER_ERROR.findByPk(id);
    if (ER_ERROR) {
        res.status(200).json(ER_ERROR);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    