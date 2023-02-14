
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const PPCA_PROPERTY_CATEGORY = await db.sequelize.models.PPCA_PROPERTY_CATEGORY.findAll();
    res.status(200).json(PPCA_PROPERTY_CATEGORY);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const PPCA_PROPERTY_CATEGORY = await db.sequelize.models.PPCA_PROPERTY_CATEGORY.findByPk(id);
    if (PPCA_PROPERTY_CATEGORY) {
        res.status(200).json(PPCA_PROPERTY_CATEGORY);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    