
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOLRAT_MONSTER_LAIR_ACTION = await db.sequelize.models.MOLRAT_MONSTER_LAIR_ACTION.findAll();
    res.status(200).json(MOLRAT_MONSTER_LAIR_ACTION);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOLRAT_MONSTER_LAIR_ACTION = await db.sequelize.models.MOLRAT_MONSTER_LAIR_ACTION.findByPk(id);
    if (MOLRAT_MONSTER_LAIR_ACTION) {
        res.status(200).json(MOLRAT_MONSTER_LAIR_ACTION);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    