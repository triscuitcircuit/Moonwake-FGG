const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('ST_STATUS', {
            ST_CODE:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            ST_NAME: DataTypes.STRING,
            ST_DETAIL: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'ST_STATUS',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}