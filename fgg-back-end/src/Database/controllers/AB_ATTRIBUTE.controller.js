const db = require("../models");
const AB_ATTRIBUTE = db.ab_attribute;
const Op = db.Sequelize.Op;


exports.AB_ATTR_findOne = (req, res)=>{
    const id = req.params.id;

    AB_ATTRIBUTE.findByPk(id)
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

exports.AB_ATTR_findAll = (req, res) =>{
    const name = req.query.AB_NAME;
    var condition = name ? {name: {[Op.like]: '%${AB_NAME}%'}} :null;

    AB_ATTRIBUTE.findAll({where: condition})
        .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:
            err.message || "ERROR encountered retrieving AB_Attribute"
        });
    });

}