const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class CHLE_CHALLENGE_LEVEL extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    CHLE_CHALLENGE_LEVEL.init({
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
    return CHLE_CHALLENGE_LEVEL;
}