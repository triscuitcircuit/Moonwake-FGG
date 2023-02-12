const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('AKTY_ATTACK_TYPE',{
            AKTY_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            GASY_ID: DataTypes.INTEGER(8),
            AKTY_NAME: DataTypes.STRING,
            AKTY_DETAIL: DataTypes.STRING,
            AKTY_DISPLAY_NAME: DataTypes.STRING,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
            AKTY_ORDER_VALUE: DataTypes.INTEGER(8),
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'AKTY_ATTACK_TYPE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}