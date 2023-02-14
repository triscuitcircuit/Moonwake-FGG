
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const CHCL_CHARACTER_CLASS = await db.sequelize.models.CHCL_CHARACTER_CLASS.findAll();
    res.status(200).json(CHCL_CHARACTER_CLASS);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const CHCL_CHARACTER_CLASS = await db.sequelize.models.CHCL_CHARACTER_CLASS.findByPk(id);
    if (CHCL_CHARACTER_CLASS) {
        res.status(200).json(CHCL_CHARACTER_CLASS);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    