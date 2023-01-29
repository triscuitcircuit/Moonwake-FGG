// GASY_GAME_SYSTEM
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class GASY_GAME_SYSTEM extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    GASY_GAME_SYSTEM.init({
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
    return GASY_GAME_SYSTEM;
}