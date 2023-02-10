// MOAB_MONSTER_ATTRIBUTE
const AB_ATTRIBUTE = require('./AB_ATTRIBUTE');
const {Model, DataTypes} = require('sequelize');
const db = require("./index");
module.exports = (sequelize, DataTypes)=>{
    class MOAB_MONSTER_ATTRIBUTE extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
        }
    }
    MOAB_MONSTER_ATTRIBUTE.init({
            MOAB_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            AB_ID: DataTypes.INTEGER(8),
            MOAB_VALUE: DataTypes.INTEGER(4),
            MOAB_BONUS_VALUE: DataTypes.INTEGER(4),
            MOAB_DISPLAY_TEXT: DataTypes.STRING,
            MOAB_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOAB_ORDER_VALUE: DataTypes.INTEGER(2),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOAB_MONSTER_ATTRIBUTE',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MOAB_MONSTER_ATTRIBUTE;
}