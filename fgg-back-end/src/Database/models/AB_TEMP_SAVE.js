const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class AB_TEMP_SAVE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    AB_TEMP_SAVE.init({
            AB_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            GASY_ID: DataTypes.INTEGER(8),
            AB_NAME: DataTypes.STRING,
            AB_DETAIL: DataTypes.STRING,
            AB_DISPLAY_NAME: DataTypes.STRING,
            AB_VALUE: DataTypes.INTEGER(4),
            AB_BONUS_VALUE: DataTypes.INTEGER(2),
            AB_ORDER_VALUE: DataTypes.INTEGER(4),
            ST_CODE: DataTypes.INTEGER(16),
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
            ABCA_ID: DataTypes.INTEGER(8),
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'AB_TEMP_SAVE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return AB_TEMP_SAVE;
}