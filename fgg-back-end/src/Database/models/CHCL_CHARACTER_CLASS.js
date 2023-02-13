const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('CHCL_CHARACTER_CLASS',{
            CHCL_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            GASY_ID: DataTypes.INTEGER(8),
            GACO_ID: DataTypes.INTEGER(8),
            CHCL_NAME: DataTypes.STRING,
            CHCL_DISPLAY_NAME: DataTypes.STRING,
            CHCL_DETAIL: DataTypes.STRING,
            CHCL_ORDER_VALUE: DataTypes.INTEGER(8),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'CHCL_CHARACTER_CLASS',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}