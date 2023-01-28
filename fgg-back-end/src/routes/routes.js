const {gen_findAll, gen_findOne} = require("../Database/controllers/gen");
const db = require("../Database/models");

module.exports = app =>{
    var router = require("express").Router();

    // "findAll" path generator for each table
    // fullname of table for access
    // ie. "http://localhost:8080/api/abca_attribute_category"
    db.list.forEach(model=>{
        router.get("/"+model.tableName,
            (req,res)=>{
            gen_findAll(req,res,model);
        })
    });

    // "findOne" path generator for each table
    // fullname of table for access
    // ie. "http://localhost:8080/api/abca_attribute_category/10"
    db.list.forEach(model=>{
        router.get("/"+model.tableName+"/:id",
            (req,res)=>{
                gen_findOne(req,res,model)
            })
    });

    app.use('/api/',router);
}