
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const ATCL_ACTION_CLASS = await db.sequelize.models.ATCL_ACTION_CLASS.findAll();
    res.status(200).json(ATCL_ACTION_CLASS);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const ATCL_ACTION_CLASS = await db.sequelize.models.ATCL_ACTION_CLASS.findByPk(id);
    if (ATCL_ACTION_CLASS) {
        res.status(200).json(ATCL_ACTION_CLASS);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    