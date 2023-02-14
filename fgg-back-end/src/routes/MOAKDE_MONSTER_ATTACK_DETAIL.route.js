
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOAKDE_MONSTER_ATTACK_DETAIL = await db.sequelize.models.MOAKDE_MONSTER_ATTACK_DETAIL.findAll();
    res.status(200).json(MOAKDE_MONSTER_ATTACK_DETAIL);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOAKDE_MONSTER_ATTACK_DETAIL = await db.sequelize.models.MOAKDE_MONSTER_ATTACK_DETAIL.findByPk(id);
    if (MOAKDE_MONSTER_ATTACK_DETAIL) {
        res.status(200).json(MOAKDE_MONSTER_ATTACK_DETAIL);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    