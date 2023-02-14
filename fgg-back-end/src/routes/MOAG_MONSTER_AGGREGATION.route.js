
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOAG_MONSTER_AGGREGATION = await db.sequelize.models.MOAG_MONSTER_AGGREGATION.findAll();
    res.status(200).json(MOAG_MONSTER_AGGREGATION);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOAG_MONSTER_AGGREGATION = await db.sequelize.models.MOAG_MONSTER_AGGREGATION.findByPk(id);
    if (MOAG_MONSTER_AGGREGATION) {
        res.status(200).json(MOAG_MONSTER_AGGREGATION);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    