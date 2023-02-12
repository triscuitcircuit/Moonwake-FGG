
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('SK_SKILL', {
            SK_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            SK_NAME: DataTypes.STRING,
            SK_DETAIL: DataTypes.STRING,
            SK_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            SK_RELATED_AB_NAME: DataTypes.STRING,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'SK_SKILL',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}