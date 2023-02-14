
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const GACODTSH_GAME_COMP_DATA_SHARE = await db.sequelize.models.GACODTSH_GAME_COMP_DATA_SHARE.findAll();
    res.status(200).json(GACODTSH_GAME_COMP_DATA_SHARE);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const GACODTSH_GAME_COMP_DATA_SHARE = await db.sequelize.models.GACODTSH_GAME_COMP_DATA_SHARE.findByPk(id);
    if (GACODTSH_GAME_COMP_DATA_SHARE) {
        res.status(200).json(GACODTSH_GAME_COMP_DATA_SHARE);
    } else {
        res.status(404).send('404 - Not found');
    }
}

module.exports=[
    getAll,
    getById
]
    