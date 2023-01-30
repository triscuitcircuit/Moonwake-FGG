// MOLRAT_MONSTER_LAIR_ACTION
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MOLRAT_MONSTER_LAIR_ACTION extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MOLRAT_MONSTER_LAIR_ACTION.init({
            MOLRAT_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            MOLRAT_DISPLAY_TEXT: DataTypes.STRING,
            MOLRAT_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOLRAT_ORDER_VALUE: DataTypes.INTEGER(4),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOLRAT_MONSTER_LAIR_ACTION',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MOLRAT_MONSTER_LAIR_ACTION;
}