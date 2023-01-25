const AB_ATTR = require("../Database/controllers/AB_ATTRIBUTE.controller");
const AB_TEMP = require("../Database/controllers/AB_TEMP_SAVE.controller");
module.exports = app =>{
    const AB_ATTR = require('../Database/controllers/AB_ATTRIBUTE.controller');
    const AB_TEMP = require('../Database/controllers/AB_TEMP_SAVE.controller');

    var router = require("express").Router();

    router.get("/ab-attr", AB_ATTR.AB_ATTR_findAll);
    router.get("/ab-temp", AB_TEMP.AB_TEMP_findAll);

    // fullname of table for access
    router.get("/ab-temp/:id", AB_TEMP.AB_TEMP_findOne);
    router.get("/ab-attr/:id", AB_ATTR.AB_ATTR_findOne);

    app.use('/api/',router);
}