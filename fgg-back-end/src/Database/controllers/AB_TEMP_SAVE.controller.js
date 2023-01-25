const db = require("../models");
const AB_TEMP_SAVE = db.ab_temp_save;
const Op = db.Sequelize.Op;

exports.AB_TEMP_findOne = (req, res)=>{
    const id = req.params.id;

    AB_TEMP_SAVE.findByPk(id)
        .then(data=>{
            if (data){
                res.send(data);
            }else{
                res.status(404).send({
                    message: 'Cannot find AB_TEMP_SAVE with id=${id}'
                });
            }
        })
        .catch(err=>{
            res.status(500).send({
                message: 'Error retrieving AB_TEMP_SAVE with id='+id
            });
        });
}

exports.AB_TEMP_findAll = (req, res) =>{
    const name = req.query.AB_NAME;
    var condition = name ? {name: {[Op.like]: '%${AB_NAME}%'}} :null;

    AB_TEMP_SAVE.findAll({where: condition})
        .then(data=>{
            res.send(data);
        }).catch(err=>{
        res.status(500).send({
            message:
                err.message || "ERROR encountered retrieving AB_Attribute"
        });
    });

//     // Create and Save a new Tutorial
//     exports.create = (req, res) => {
//
//     };
//
//
// // Delete a Tutorial with the specified id in the request
//     exports.delete = (req, res) => {
//
//     };
//
    // DO NOT IMPLEMENT DELETE ALL?
// // Delete all Tutorials from the database.
//     exports.deleteAll = (req, res) => {
//
//     };

}

