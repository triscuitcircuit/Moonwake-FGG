
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOMV_MONSTER_MOVEMENT = await db.sequelize.models.MOMV_MONSTER_MOVEMENT.findAll();
    res.status(200).json(MOMV_MONSTER_MOVEMENT);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOMV_MONSTER_MOVEMENT = await db.sequelize.models.MOMV_MONSTER_MOVEMENT.findByPk(id);
    if (MOMV_MONSTER_MOVEMENT) {
        res.status(200).json(MOMV_MONSTER_MOVEMENT);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    