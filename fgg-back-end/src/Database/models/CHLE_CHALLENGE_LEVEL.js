const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    sequelize.define('CHLE_CHALLENGE_LEVEL',{
            CHLE_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            GASY_ID: DataTypes.INTEGER(8),
            CHLE_NAME: DataTypes.STRING,
            CHLE_DETAIL: DataTypes.STRING,
            CHLE_DISPLAY_NAME: DataTypes.STRING,
            CHLE_ORDER_VALUE: DataTypes.INTEGER(2),
            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
            CHLE_PROFICIENCY_BONUS_VALUE: DataTypes.INTEGER(2),
            CHLE_BASE_EXPERIENCE_POINTS: DataTypes.INTEGER(8),
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'CHLE_CHALLENGE_LEVEL',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
}