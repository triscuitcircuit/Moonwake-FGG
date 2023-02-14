
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOTGAK_MONSTER_TRIGGER_ATTACK = await db.sequelize.models.MOTGAK_MONSTER_TRIGGER_ATTACK.findAll();
    res.status(200).json(MOTGAK_MONSTER_TRIGGER_ATTACK);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOTGAK_MONSTER_TRIGGER_ATTACK = await db.sequelize.models.MOTGAK_MONSTER_TRIGGER_ATTACK.findByPk(id);
    if (MOTGAK_MONSTER_TRIGGER_ATTACK) {
        res.status(200).json(MOTGAK_MONSTER_TRIGGER_ATTACK);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    