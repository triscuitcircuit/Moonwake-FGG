
const db = require("../Database/models");
const { getIdParam } = require('../Database/config/helpers');

async function getAll(req, res) {
    const USGASYMO_USER_GAME_SYS_MONSTER = await db.sequelize.models.USGASYMO_USER_GAME_SYS_MONSTER.findAll();
    res.status(200).json(USGASYMO_USER_GAME_SYS_MONSTER);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const USGASYMO_USER_GAME_SYS_MONSTER = await db.sequelize.models.USGASYMO_USER_GAME_SYS_MONSTER.findByPk(id);
    if (USGASYMO_USER_GAME_SYS_MONSTER) {
        res.status(200).json(USGASYMO_USER_GAME_SYS_MONSTER);
    } else {
        res.status(404).send('404 - Not found');
    }
}


module.exports=[
    getAll,
    getById
]