
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const AL_ALIGNMENT = await db.sequelize.models.AL_ALIGNMENT.findAll();
    res.status(200).json(AL_ALIGNMENT);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const AL_ALIGNMENT = await db.sequelize.models.AL_ALIGNMENT.findByPk(id);
    if (AL_ALIGNMENT) {
        res.status(200).json(AL_ALIGNMENT);
    } else {
        res.status(404).send('404 - Not found');
    }
}
module.exports=[
    getAll,
    getById
]
    