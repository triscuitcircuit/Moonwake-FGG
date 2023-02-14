
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const AKCA_ATTACK_CATEGORY = await db.sequelize.models.AKCA_ATTACK_CATEGORY.findAll();
    res.status(200).json(AKCA_ATTACK_CATEGORY);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const AKCA_ATTACK_CATEGORY = await db.sequelize.models.AKCA_ATTACK_CATEGORY.findByPk(id);
    if (AKCA_ATTACK_CATEGORY) {
        res.status(200).json(AKCA_ATTACK_CATEGORY);
    } else {
        res.status(404).send('404 - Not found');
    }
}


module.exports=[
    getAll,
    getById
]
    