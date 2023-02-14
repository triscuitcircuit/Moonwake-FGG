
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOAL_MONSTER_ALIGNMENT = await db.sequelize.models.MOAL_MONSTER_ALIGNMENT.findAll();
    res.status(200).json(MOAL_MONSTER_ALIGNMENT);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOAL_MONSTER_ALIGNMENT = await db.sequelize.models.MOAL_MONSTER_ALIGNMENT.findByPk(id);
    if (MOAL_MONSTER_ALIGNMENT) {
        res.status(200).json(MOAL_MONSTER_ALIGNMENT);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    