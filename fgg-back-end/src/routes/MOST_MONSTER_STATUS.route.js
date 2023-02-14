
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOST_MONSTER_STATUS = await db.sequelize.models.MOST_MONSTER_STATUS.findAll();
    res.status(200).json(MOST_MONSTER_STATUS);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOST_MONSTER_STATUS = await db.sequelize.models.MOST_MONSTER_STATUS.findByPk(id);
    if (MOST_MONSTER_STATUS) {
        res.status(200).json(MOST_MONSTER_STATUS);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    