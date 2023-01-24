module.exports = app =>{
    const AB_ATTR = require('../Database/controllers/AB_ATTRIBUTE.controller');

    var router = require("express").Router();

    router.get("/", AB_ATTR.AB_ATTR_findAll);

    app.use('/api/ab-attr',router);
}