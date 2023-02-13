// GASY_GAME_SYSTEM
const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('GASY_GAME_SYSTEM', {
            GASY_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_PRIMARY_GACO_ID: DataTypes.INTEGER(8),
            GASY_SECONDARY_GACO_ID: DataTypes.INTEGER(8),
            GASY_NAME: DataTypes.STRING,
            GASY_DETAIL: DataTypes.STRING,
            GASY_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'GASY_GAME_SYSTEM',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}