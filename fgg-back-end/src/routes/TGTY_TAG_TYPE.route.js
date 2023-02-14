
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const TGTY_TAG_TYPE = await db.sequelize.models.TGTY_TAG_TYPE.findAll();
    res.status(200).json(TGTY_TAG_TYPE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const TGTY_TAG_TYPE = await db.sequelize.models.TGTY_TAG_TYPE.findByPk(id);
    if (TGTY_TAG_TYPE) {
        res.status(200).json(TGTY_TAG_TYPE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    