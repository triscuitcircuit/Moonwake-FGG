// MOMV_MONSTER_MOVEMENT
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MOMV_MONSTER_MOVEMENT extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MOMV_MONSTER_MOVEMENT.init({
            MOMV_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            MVTY_ID: DataTypes.INTEGER(8),
            MOMV_ORDER_VALUE: DataTypes.INTEGER(2),
            MOMV_SPECIAL_DISPLAY_TEXT: DataTypes.STRING,
            MOMV_DISTANCE_VALUE: DataTypes.INTEGER(4),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOMV_MONSTER_MOVEMENT',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MOMV_MONSTER_MOVEMENT;
}