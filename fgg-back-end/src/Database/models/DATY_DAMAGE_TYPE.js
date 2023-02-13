const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('DATY_DAMAGE_TYPE', {
            DATY_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            GASY_ID: DataTypes.INTEGER(8),
            DATY_NAME: DataTypes.STRING,
            DATY_DETAIL: DataTypes.STRING,
            DATY_DISPLAY_NAME: DataTypes.STRING,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'DATY_DAMAGE_TYPE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}