
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const AT_ACTION = await db.sequelize.models.AT_ACTION.findAll();
    res.status(200).json(AT_ACTION);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const AT_ACTION = await db.sequelize.models.AT_ACTION.findByPk(id);
    if (AT_ACTION) {
        res.status(200).json(AT_ACTION);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    