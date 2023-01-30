// MVTY_MOVEMENT_TYPE

const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MVTY_MOVEMENT_TYPE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MVTY_MOVEMENT_TYPE.init({
            MVTY_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASY_ID: DataTypes.INTEGER(8),
            MVTY_NAME: DataTypes.STRING,
            MVTY_DETAIL: DataTypes.STRING,
            MVTY_DISPLAY_NAME: DataTypes.STRING,

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            MVTY_ORDER_VALUE: DataTypes.INTEGER(4),

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MVTY_MOVEMENT_TYPE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MVTY_MOVEMENT_TYPE;
}