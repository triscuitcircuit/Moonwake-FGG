
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOSRTG_MONSTER_SEARCH_TAG = await db.sequelize.models.MOSRTG_MONSTER_SEARCH_TAG.findAll();
    res.status(200).json(MOSRTG_MONSTER_SEARCH_TAG);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOSRTG_MONSTER_SEARCH_TAG = await db.sequelize.models.MOSRTG_MONSTER_SEARCH_TAG.findByPk(id);
    if (MOSRTG_MONSTER_SEARCH_TAG) {
        res.status(200).json(MOSRTG_MONSTER_SEARCH_TAG);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    