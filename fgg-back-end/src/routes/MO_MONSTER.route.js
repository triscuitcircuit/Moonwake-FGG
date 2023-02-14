
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MO_MONSTER = await db.sequelize.models.MO_MONSTER.findAll();
    res.status(200).json(MO_MONSTER);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MO_MONSTER = await db.sequelize.models.MO_MONSTER.findByPk(id);
    if (MO_MONSTER) {
        res.status(200).json(MO_MONSTER);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    