
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const RR_RARITY = await db.sequelize.models.RR_RARITY.findAll();
    res.status(200).json(RR_RARITY);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const RR_RARITY = await db.sequelize.models.RR_RARITY.findByPk(id);
    if (RR_RARITY) {
        res.status(200).json(RR_RARITY);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    