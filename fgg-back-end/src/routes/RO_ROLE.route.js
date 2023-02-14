
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const RO_ROLE = await db.sequelize.models.RO_ROLE.findAll();
    res.status(200).json(RO_ROLE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const RO_ROLE = await db.sequelize.models.RO_ROLE.findByPk(id);
    if (RO_ROLE) {
        res.status(200).json(RO_ROLE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    