const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('LOAD_TRAIT',{
            TRAIT_NAME: DataTypes.STRING,
            TRAIT_DETAIL: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'LOAD_TRAIT',
        }
    )
}