
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const ATDE_ACTION_DETAIL = await db.sequelize.models.ATDE_ACTION_DETAIL.findAll();
    res.status(200).json(ATDE_ACTION_DETAIL);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const ATDE_ACTION_DETAIL = await db.sequelize.models.ATDE_ACTION_DETAIL.findByPk(id);
    if (ATDE_ACTION_DETAIL) {
        res.status(200).json(ATDE_ACTION_DETAIL);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    