
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const ABCA_ATTRIBUTE_CATEGORY = await db.sequelize.models.ABCA_ATTRIBUTE_CATEGORY.findAll();
    res.status(200).json(ABCA_ATTRIBUTE_CATEGORY);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const ABCA_ATTRIBUTE_CATEGORY = await db.sequelize.models.ABCA_ATTRIBUTE_CATEGORY.findByPk(id);
    if (ABCA_ATTRIBUTE_CATEGORY) {
        res.status(200).json(ABCA_ATTRIBUTE_CATEGORY);
    } else {
        res.status(404).send('404 - Not found');
    }
}
module.exports=[
    getAll,
    getById
]
    