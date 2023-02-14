
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const TEST_TABLE = await db.sequelize.models.TEST_TABLE.findAll();
    res.status(200).json(TEST_TABLE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const TEST_TABLE = await db.sequelize.models.TEST_TABLE.findByPk(id);
    if (TEST_TABLE) {
        res.status(200).json(TEST_TABLE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    