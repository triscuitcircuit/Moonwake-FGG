
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOAB_MONSTER_ATTRIBUTE =
        await db.sequelize.models.MOAB_MONSTER_ATTRIBUTE.findAll(
            {include: db.sequelize.models.AB_ATTRIBUTE}
        );
    res.status(200).json(MOAB_MONSTER_ATTRIBUTE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOAB_MONSTER_ATTRIBUTE = await db.sequelize.models.MOAB_MONSTER_ATTRIBUTE.findByPk(id);
    if (MOAB_MONSTER_ATTRIBUTE) {
        res.status(200).json(MOAB_MONSTER_ATTRIBUTE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    