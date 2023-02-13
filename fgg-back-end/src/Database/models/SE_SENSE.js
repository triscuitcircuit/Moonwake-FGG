const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('SE_SENSE', {
            SE_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            SE_NAME: DataTypes.STRING,
            SE_DETAIL: DataTypes.STRING,
            SE_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,



        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'SE_SENSE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}