const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('ATCL_ACTION_CLASS',{
            ATCL_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            GASY_ID: DataTypes.STRING,
            ATCL_NAME: DataTypes.STRING,
            ATCL_DETAIL: DataTypes.STRING,
            ATCL_DISPLAY_NAME: DataTypes.STRING,
            ATCL_ORDER_VALUE: DataTypes.INTEGER,
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'ATCL_ACTION_CLASS',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}