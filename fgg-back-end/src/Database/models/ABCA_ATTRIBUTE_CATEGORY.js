const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('ABCA_ATTRIBUTE_CATEGORY',{
            GASY_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            ABCA_ID: DataTypes.INTEGER(8),
            ABCA_NAME: DataTypes.STRING,
            ABCA_SHORT_NAME: DataTypes.STRING,
            ABCA_DETAIL: DataTypes.STRING,
            ABCA_DISPLAY_NAME: DataTypes.STRING,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'ABCA_ATTRIBUTE_CATEGORY',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}