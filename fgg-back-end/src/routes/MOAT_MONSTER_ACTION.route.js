
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOAT_MONSTER_ACTION = await db.sequelize.models.MOAT_MONSTER_ACTION.findAll();
    res.status(200).json(MOAT_MONSTER_ACTION);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOAT_MONSTER_ACTION = await db.sequelize.models.MOAT_MONSTER_ACTION.findByPk(id);
    if (MOAT_MONSTER_ACTION) {
        res.status(200).json(MOAT_MONSTER_ACTION);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    