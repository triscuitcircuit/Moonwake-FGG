
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const ATTG_ACTION_TAG = await db.sequelize.models.ATTG_ACTION_TAG.findAll();
    res.status(200).json(ATTG_ACTION_TAG);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const ATTG_ACTION_TAG = await db.sequelize.models.ATTG_ACTION_TAG.findByPk(id);
    if (ATTG_ACTION_TAG) {
        res.status(200).json(ATTG_ACTION_TAG);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    