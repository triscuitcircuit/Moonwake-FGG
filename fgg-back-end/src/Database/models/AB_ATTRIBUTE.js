const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('AB_ATTRIBUTE',{
        AB_ID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        GASY_ID: DataTypes.INTEGER(8),
        AB_NAME: DataTypes.STRING,
        AB_DETAIL: DataTypes.STRING,
        AB_DISPLAY_NAME: DataTypes.STRING,
        AB_VALUE: DataTypes.INTEGER,
        AB_BONUS_VALUE: DataTypes.INTEGER,
        LAST_MODIFIED_DATE: DataTypes.DATE,
        LAST_MODIFIED_BY: DataTypes.DATE,
        ABCA_ID: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: 'FGGDATA',
        tableName: 'AB_ATTRIBUTE',
        createdAt: 'LAST_MODIFIED_DATE',
        updatedAt: 'LAST_MODIFIED_BY',
    }
    )
}