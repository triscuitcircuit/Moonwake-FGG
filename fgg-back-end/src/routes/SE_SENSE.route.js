
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const SE_SENSE = await db.sequelize.models.SE_SENSE.findAll();
    res.status(200).json(SE_SENSE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const SE_SENSE = await db.sequelize.models.SE_SENSE.findByPk(id);
    if (SE_SENSE) {
        res.status(200).json(SE_SENSE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    