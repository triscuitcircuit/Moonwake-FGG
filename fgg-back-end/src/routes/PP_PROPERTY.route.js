
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const PP_PROPERTY = await db.sequelize.models.PP_PROPERTY.findAll();
    res.status(200).json(PP_PROPERTY);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const PP_PROPERTY = await db.sequelize.models.PP_PROPERTY.findByPk(id);
    if (PP_PROPERTY) {
        res.status(200).json(PP_PROPERTY);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    