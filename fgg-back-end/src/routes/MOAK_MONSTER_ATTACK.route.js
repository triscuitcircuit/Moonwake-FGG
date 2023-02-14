
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOAK_MONSTER_ATTACK = await db.sequelize.models.MOAK_MONSTER_ATTACK.findAll();
    res.status(200).json(MOAK_MONSTER_ATTACK);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOAK_MONSTER_ATTACK = await db.sequelize.models.MOAK_MONSTER_ATTACK.findByPk(id);
    if (MOAK_MONSTER_ATTACK) {
        res.status(200).json(MOAK_MONSTER_ATTACK);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    