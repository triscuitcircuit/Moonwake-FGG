
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const CD_CONDITION = await db.sequelize.models.CD_CONDITION.findAll();
    res.status(200).json(CD_CONDITION);
}
    async function getById(req, res) {
        const id = getIdParam(req);
        const CD_CONDITION = await db.sequelize.models.CD_CONDITION.findByPk(id);
        if (CD_CONDITION) {
            res.status(200).json(CD_CONDITION);
        } else {
            res.status(404).send('404 - Not found');
        }
    }
    module.exports=[
        getAll,
        getById
    ]
    