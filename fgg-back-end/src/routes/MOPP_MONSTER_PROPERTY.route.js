
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOPP_MONSTER_PROPERTY = await db.sequelize.models.MOPP_MONSTER_PROPERTY.findAll();
    res.status(200).json(MOPP_MONSTER_PROPERTY);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOPP_MONSTER_PROPERTY = await db.sequelize.models.MOPP_MONSTER_PROPERTY.findByPk(id);
    if (MOPP_MONSTER_PROPERTY) {
        res.status(200).json(MOPP_MONSTER_PROPERTY);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    