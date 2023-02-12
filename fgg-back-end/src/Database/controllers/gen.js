const Sequelize = require('sequelize');
const {Op} = require("sequelize");

function gen_findOne(req, res, obj, associations) {
    const id = req.params.id;
    obj.findByPk(id,{
        include:[{
            model: associations[associations.toString()],
            through:{attributes:[]}
        }]
    })
        .then(data=>{
            if (data){
                res.send(data);
            }else{
                res.status(404).send({
                    message: 'Cannot find '+obj.toString()+' with id=${id}'
                });
            }
        })
        .catch(err=>{
            res.status(500).send({
                message: 'Encode error retrieving'+obj.toString()+' with id='+id
            });
        });
}


function gen_findAll(req, res, obj, q_func){
    let temp = JSON.stringify(q_func);
    let test = req.query;
    const name = req.query[test];
    var condition = name ? {name: {[Op.like]: '%${q_func}%'}} :null;

    obj.findAll({where: condition})
        .then(data=>{
            res.send(data);
        }).catch(err=>{
        res.status(500).send({
            message:
                err.message || "ERROR encountered retrieving: "+ obj.toString()
        });
    });
}

module.exports = {gen_findAll, gen_findOne}