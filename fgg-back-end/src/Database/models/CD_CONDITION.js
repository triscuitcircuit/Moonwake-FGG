const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('CD_CONDITION', {
            CD_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            GASY_ID: DataTypes.INTEGER(8),
            CD_NAME: DataTypes.STRING,
            CD_DETAIL: DataTypes.STRING,
            CD_DISPLAY_NAME: DataTypes.STRING,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'CD_CONDITION',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}