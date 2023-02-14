
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MOPBRE_MONSTER_PUBLISHED_REF = await db.sequelize.models.MOPBRE_MONSTER_PUBLISHED_REF.findAll();
    res.status(200).json(MOPBRE_MONSTER_PUBLISHED_REF);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MOPBRE_MONSTER_PUBLISHED_REF = await db.sequelize.models.MOPBRE_MONSTER_PUBLISHED_REF.findByPk(id);
    if (MOPBRE_MONSTER_PUBLISHED_REF) {
        res.status(200).json(MOPBRE_MONSTER_PUBLISHED_REF);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]