
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const RENO_REVIEW_NOTES = await db.sequelize.models.RENO_REVIEW_NOTES.findAll();
    res.status(200).json(RENO_REVIEW_NOTES);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const RENO_REVIEW_NOTES = await db.sequelize.models.RENO_REVIEW_NOTES.findByPk(id);
    if (RENO_REVIEW_NOTES) {
        res.status(200).json(RENO_REVIEW_NOTES);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    