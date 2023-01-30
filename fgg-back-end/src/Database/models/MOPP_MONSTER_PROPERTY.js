// MOPP_MONSTER_PROPERTY
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MOPP_MONSTER_PROPERTY extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MOPP_MONSTER_PROPERTY.init({
            MOPP_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            PP_ID: DataTypes.INTEGER(8),
            MOPP_DISPLAY_TEXT: DataTypes.STRING,
            MOPP_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOPP_ORDER_VALUE: DataTypes.INTEGER(2),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,

            MOPP_CHAR_VALUE: DataTypes.STRING,
            MOPP_NUMBER_VALUE: DataTypes.INTEGER(8),
        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOPP_MONSTER_PROPERTY',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MOPP_MONSTER_PROPERTY;
}