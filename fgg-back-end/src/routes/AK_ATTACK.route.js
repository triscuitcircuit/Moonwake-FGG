
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const AK_ATTACK = await db.sequelize.models.AK_ATTACK.findAll();
    res.status(200).json(AK_ATTACK);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const AK_ATTACK = await db.sequelize.models.AK_ATTACK.findByPk(id);
    if (AK_ATTACK) {
        res.status(200).json(AK_ATTACK);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]