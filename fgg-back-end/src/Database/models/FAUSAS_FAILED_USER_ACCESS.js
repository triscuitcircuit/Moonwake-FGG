const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('FAUSAS_FAILED_USER_ACCESS', {
            FAUSAS_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            FAUSAS_LOGIN_ID: DataTypes.STRING,
            FAUSAS_PASSWORD: DataTypes.STRING,
            FAUSAS_ATTEMPT_DATEKEY: DataTypes.INTEGER(8),
            FAUSAS_DETAIL: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'FAUSAS_FAILED_USER_ACCESS',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}