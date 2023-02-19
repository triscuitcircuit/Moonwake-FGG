
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const AB_ATTRIBUTE =
        await db.sequelize.models.AB_ATTRIBUTE.findAll(
            { where: {ST_CODE: "active"},
                include: [
                    { all: true, nested: true}
                ]
            })
    res.status(200).json(AB_ATTRIBUTE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const AB_ATTRIBUTE = await db.sequelize.models.AB_ATTRIBUTE.findByPk(id);
    if (AB_ATTRIBUTE) {
        res.status(200).json(AB_ATTRIBUTE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    