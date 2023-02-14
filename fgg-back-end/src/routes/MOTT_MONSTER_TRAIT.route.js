
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOTT_MONSTER_TRAIT = await db.sequelize.models.MOTT_MONSTER_TRAIT.findAll();
    res.status(200).json(MOTT_MONSTER_TRAIT);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOTT_MONSTER_TRAIT = await db.sequelize.models.MOTT_MONSTER_TRAIT.findByPk(id);
    if (MOTT_MONSTER_TRAIT) {
        res.status(200).json(MOTT_MONSTER_TRAIT);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    