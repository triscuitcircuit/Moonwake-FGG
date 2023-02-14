
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const GACOSP_GAME_COMPANY_SPELL = await db.sequelize.models.GACOSP_GAME_COMPANY_SPELL.findAll();
    res.status(200).json(GACOSP_GAME_COMPANY_SPELL);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const GACOSP_GAME_COMPANY_SPELL = await db.sequelize.models.GACOSP_GAME_COMPANY_SPELL.findByPk(id);
    if (GACOSP_GAME_COMPANY_SPELL) {
        res.status(200).json(GACOSP_GAME_COMPANY_SPELL);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    