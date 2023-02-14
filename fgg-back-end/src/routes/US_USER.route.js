
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const US_USER = await db.sequelize.models.US_USER.findAll();
    res.status(200).json(US_USER);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const US_USER = await db.sequelize.models.US_USER.findByPk(id);
    if (US_USER) {
        res.status(200).json(US_USER);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]