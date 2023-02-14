
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const TT_TRAIT = await db.sequelize.models.TT_TRAIT.findAll();
    res.status(200).json(TT_TRAIT);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const TT_TRAIT = await db.sequelize.models.TT_TRAIT.findByPk(id);
    if (TT_TRAIT) {
        res.status(200).json(TT_TRAIT);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]