const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('USASLO_USER_ACCESS_LOG', {
            USASLO_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            US_ID: DataTypes.INTEGER(8),
            USAS_LOGIN_DATEKEY: DataTypes.INTEGER(8),
            USAS_LOGIN_DATETIMEKEY: DataTypes.INTEGER(16),
            USAS_LOGOUT_DATEKEY: DataTypes.INTEGER(8),
            USAS_LOGOUT_DATETIMEKEY: DataTypes.INTEGER(16),
            USAS_LOGGED_IN_FLAG: DataTypes.STRING,
            USAS_LOGIN_ISSUE_COUNT:  DataTypes.INTEGER(4),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'USASLO_USER_ACCESS_LOG',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}