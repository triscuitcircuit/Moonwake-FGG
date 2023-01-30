// MOTGAK_MONSTER_TRIGGER_ATTACK
const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class MOTGAK_MONSTER_TRIGGER_ATTACK extends Model{
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models){
            // associated models go here
        }
    }
    MOTGAK_MONSTER_TRIGGER_ATTACK.init({
            MOTGAK_ID:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            //: DataTypes.STRING,
            //: DataTypes.INTEGER(8),
            MOAK_ID: DataTypes.INTEGER(8),
            AKTY_ID: DataTypes.INTEGER(8),
            DATY_ID: DataTypes.INTEGER(8),
            MOTGAK_RELATED_AB_ID: DataTypes.INTEGER(8),
            MOTGAK_DISPLAY_TEXT: DataTypes.STRING,
            MOTGAK_TAGGED_DISPLAY_TEXT: DataTypes.STRING,
            MOTGAK_ORDER_VALUE: DataTypes.INTEGER(2),
            MOTGAK_TO_HIT_BONUS: DataTypes.INTEGER(2),
            MOTGAK_REACH_DISTANCE_FEET: DataTypes.INTEGER(4),
            MOTGAK_TARGET_COUNT: DataTypes.INTEGER(2),
            MOTGAK_TARGET_TEXT: DataTypes.STRING,
            MOTGAK_STATIC_HIT_DAMAGE: DataTypes.INTEGER(2),
            MOTGAK_DYN_DAM_HIT_DICE_NUM: DataTypes.INTEGER(2),
            MOTGAK_DYN_DAM_HIT_DICE_TYPE: DataTypes.INTEGER(4),
            MOTGAK_DYN_DAM_HIT_BONUS: DataTypes.INTEGER(4),

            ST_CODE: DataTypes.STRING,
            LAST_MODIFIED_DATE: DataTypes.DATE,
            LAST_MODIFIED_BY: DataTypes.DATE,


        },
        {
            sequelize,
            modelName: 'FGGDATA',
            tableName: 'MOTGAK_MONSTER_TRIGGER_ATTACK',
            createdAt: 'LAST_MODIFIED_DATE',
            updatedAt: 'LAST_MODIFIED_BY',
        }
    )
    return MOTGAK_MONSTER_TRIGGER_ATTACK;
}