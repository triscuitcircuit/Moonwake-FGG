
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const AKTY_ATTACK_TYPE = await db.sequelize.models.AKTY_ATTACK_TYPE.findAll();
    res.status(200).json(AKTY_ATTACK_TYPE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const AKTY_ATTACK_TYPE = await db.sequelize.models.AKTY_ATTACK_TYPE.findByPk(id);
    if (AKTY_ATTACK_TYPE) {
        res.status(200).json(AKTY_ATTACK_TYPE);
    } else {
        res.status(404).send('404 - Not found');
    }
}


module.exports=[
    getAll,
    getById
]