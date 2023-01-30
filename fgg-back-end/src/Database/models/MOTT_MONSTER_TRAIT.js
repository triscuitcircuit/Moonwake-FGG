// MOTT_MONSTER_TRAIT

const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MOTT_MONSTER_TRAIT extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MOTT_MONSTER_TRAIT.init({
            MOTT_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            GASYMO_ID: DataTypes.INTEGER(8),
            TT_ID: DataTypes.INTEGER(8),
            MOTT_VALUE: DataTypes.INTEGER(4),
            MOTT_BONUS_VALUE: DataTypes.INTEGER(4),
            MOTT_DISPLAY_TEXT: DataTypes.STRING,
            MOTT_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOTT_ORDER_VALUE: DataTypes.INTEGER(4),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,


        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOTT_MONSTER_TRAIT',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MOTT_MONSTER_TRAIT;
}