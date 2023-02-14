
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const MODI_MONSTER_DISPLAY = await db.sequelize.models.MODI_MONSTER_DISPLAY.findAll();
    res.status(200).json(MODI_MONSTER_DISPLAY);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const MODI_MONSTER_DISPLAY = await db.sequelize.models.MODI_MONSTER_DISPLAY.findByPk(id);
    if (MODI_MONSTER_DISPLAY) {
        res.status(200).json(MODI_MONSTER_DISPLAY);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    