
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const USRO_USER_ROLE = await db.sequelize.models.USRO_USER_ROLE.findAll();
    res.status(200).json(USRO_USER_ROLE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const USRO_USER_ROLE = await db.sequelize.models.USRO_USER_ROLE.findByPk(id);
    if (USRO_USER_ROLE) {
        res.status(200).json(USRO_USER_ROLE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]