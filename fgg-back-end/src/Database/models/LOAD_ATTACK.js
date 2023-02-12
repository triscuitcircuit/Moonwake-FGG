// LOAD_ATTACK
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('LOAD_ATTACK', {
            LOAD_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            ATTACK_NAME: DataTypes.STRING,
            ATTACK_DISPLAY_NAME: DataTypes.STRING,
            ATTACK_TYPE: DataTypes.STRING,
            ACTION_CLASS: DataTypes.STRING,
            ATTACK_CATEGORY: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'LOAD_ATTACK',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}